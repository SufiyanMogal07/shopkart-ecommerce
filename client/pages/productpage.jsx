"use client"

import { addToCart } from '@/utils/cart/cart'
import { ArrowLeft } from 'lucide-react'
import { PageNotFoundError } from 'next/dist/shared/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

const ProductPage = ({ product }) => {

  if (!product) {
    return notFound()
  }
  return (
    <div className="common-page p-6! lg:px-10!">
      <Link className="flex items-center gap-x-1 font-semibold text-lg" href={"/"}> <ArrowLeft /> Go Back</Link>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 relative lg:mt-5">
        <div className="w-full h-80 md:h-110 aspect-square relative bg-black">
          <Image className="object-contain text-white" src={product.imageUrl} fill alt={product.title + " image"} />
        </div>
        <div className="px-8 pt-10">
          <h1 className="text-3xl md:text-4xl font-semibold mb-3 md:mb-6">{product.title}</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-950 mb-2 md:mb-4">MRP: ₹{product.price}</h2>
          <p className="text-lg text-purple-800">Free Delivery</p>
          <p className="text-lg my-4">{product.description}</p>
          <div className="flex gap-x-3">
            <button onClick={() => {
              addToCart(product);
            }} className="px-3 py-1 text-lg bg-violet-600 text-white border-none rounded-md">Add to Cart</button>
            <button className="px-3 py-1 text-lg bg-fuchsia-600 text-white border-none rounded-md">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage