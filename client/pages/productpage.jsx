"use client"

import { addToCart } from '@/utils/cart/cart'
import { ArrowLeft, Info, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const ProductPage = ({ product }) => {
  const [aiInsight, setAiInsight] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  if (!product) return notFound();

  useEffect(() => {
    const storedInsights = JSON.parse(localStorage.getItem("product-insights") || "{}");
    if (storedInsights[product.id]) {
      setAiInsight(storedInsights[product.id]);
    }
  }, [product])

  const generateInsight = async () => {
    const storedInsights = JSON.parse(localStorage.getItem("product-insights") || "{}");
    if (storedInsights[product.id]) {
      setAiInsight(storedInsights[product.id]);
      setShowPopup(true);
      return
    }

    setLoading(true)
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ai/insight`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: product.title,
          description: product.description,
          price: product.price,
        }),
      })

      if (!res.ok) throw new Error("AI fetch failed")
      const data = await res.json()

      let rawInsight = data.insight || "No insight available."
      const cleaned = rawInsight
        .replace(/\*|\*\*|Here’s a structured summary for.*:/g, "")
        .replace(/(\n|\r)/g, " ")
        .replace(/\s+/g, " ")
        .trim()

      setAiInsight(cleaned)
      setShowPopup(true)

      const updatedInsights = { ...storedInsights, [product.id]: cleaned }
      localStorage.setItem("product-insights", JSON.stringify(updatedInsights))
    } catch (err) {
      console.error("AI Error:", err)
      setAiInsight("Could not load AI insight.")
      setShowPopup(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="common-page p-6 lg:px-10 relative">
      <Link className="flex items-center gap-x-1 font-semibold text-lg" href={"/"}>
        <ArrowLeft /> Go Back
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 relative mt-3 lg:mt-5">
        <div className="w-full h-80 md:h-95 aspect-square relative bg-black rounded-md overflow-hidden">
          <Image
            className="object-contain text-white"
            src={product.imageUrl}
            fill
            alt={product.title + " image"}
          />
        </div>

        <div className="px-8 pt-10">
          <h1 className="text-3xl md:text-4xl font-semibold mb-3 md:mb-6">{product.title}</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            MRP: ₹{product.price}
          </h2>
          <p className="text-lg text-purple-800">Free Delivery</p>
          <p className="text-lg mb-4">{product.description}</p>

          <div className="mt-4 mb-6 flex items-center gap-x-3">
            <button
              onClick={generateInsight}
              disabled={loading}
              className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition"
            >
              {loading ? "Generating..." : "✨ Generate AI Insight"}
            </button>
            <p className='flex items-center text-gray-600 text-sm gap-x-2'><Info size={18}/> <span>Get Insight's About the product</span></p>
          </div>
          <div className="flex gap-x-5">

            <button
              onClick={() => {
                addToCart(product);
              }
              }
              className="px-3 py-1 text-lg bg-violet-600 text-white border-none rounded-md"

            >
              Add to Cart
            </button>

            <button
              onClick={() => {
                addToCart(product);
                router.push("/cart", { scroll: false })
              }}
              className="px-5 py-2 text-lg bg-purple-700 hover:bg-purple-800 text-white rounded-md transition"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>



      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-semibold mb-3">AI Insight</h3>
            <p className="text-gray-800">{aiInsight}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductPage
