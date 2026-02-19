"use client"

import { getItem, setItem } from "@/utils/localstorage/storage"
import React, { useEffect, useState } from "react"
import Link from "next/link"

const CartPage = () => {
  const [cart, setCart] = useState([])

  useEffect(() => {
    const storedCart = getItem("cart") || []
    setCart(storedCart)
  }, [])

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id)
    setCart(updatedCart)
    setItem("cart", updatedCart)
  }

  // Change Quantity
  const updateQuantity = (id, type) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        if (type === "inc") {
          return { ...item, quantity: item.quantity + 1 }
        }
        if (type === "dec" && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 }
        }
      }
      return item
    })

    setCart(updatedCart)
    setItem("cart", updatedCart)
  }

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  return (
    <div className="p-6 min-h-[85vh] max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="text-center mt-10">
          <p className="text-gray-500 mb-4">Your cart is empty</p>
          <Link
            href="/"
            className="bg-violet-600 text-white px-5 py-2 rounded-lg"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-6 border-b pb-4"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-24 h-24 object-contain"
                />

                <div className="flex-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-500">₹ {item.price}</p>

                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, "dec")}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, "inc")}
                      className="px-3 py-1 bg-gray-200 rounded"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-right">
                  <p className="font-semibold">
                    ₹ {item.price * item.quantity}
                  </p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 text-sm mt-2"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-between items-center">
            <h3 className="text-xl font-semibold">
              Total: ₹ {total.toFixed(2)}
            </h3>

            <Link
              href="/checkout"
              className="bg-violet-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-violet-700 transition"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default CartPage
