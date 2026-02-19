"use client"

import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import toast from "react-hot-toast"

const CheckoutPage = () => {
  const router = useRouter()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  })

  const [cart, setCart] = useState([])
  const [orderData, setOrderData] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || []

    if (storedCart.length === 0) {
      router.push("/cart")
    } else {
      setCart(storedCart)
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  )

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (cart.length === 0) {
      alert("Cart is empty!")
      return
    }

    const data = {
      ...formData,
      products: cart.map((item) => ({
        productId: item.id,
        quantity: item.quantity || 1,
      })),
    }

    try {
      setLoading(true)

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/orders`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      )

      if (!res.ok) throw new Error("Order failed")

      const result = await res.json()

      localStorage.removeItem("cart")

      setTimeout(() => {
         setOrderData(result);
         toast.success(result.message);
      },1000)


    } catch (err) {
      console.error(err)
      alert("Something went wrong!")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[80vh] flex justify-center items-center p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6">

        {!orderData ? (
          <>
            <h1 className="text-2xl font-semibold mb-6 text-center">
              Checkout
            </h1>

            <div className="mb-4 border p-4 rounded-lg bg-gray-50">
              <h2 className="font-medium mb-3">Order Summary</h2>

              {cart.map((item) => (
                <div key={item.id} className="flex justify-between text-sm mb-1">
                  <span>{item.title}</span>
                  <span>₹ {item.price}</span>
                </div>
              ))}

              <div className="flex justify-between font-semibold mt-3">
                <span>Total</span>
                <span>₹ {totalAmount}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />

              <textarea
                name="address"
                placeholder="Shipping Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-violet-600 text-white py-2 rounded hover:bg-violet-700 transition"
              >
                {loading ? "Placing Order..." : "Place Order"}
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="p-4 bg-green-50 border rounded-lg mb-4">
              <h2 className="text-lg font-semibold text-green-700">
                {orderData.message}
              </h2>
              <p className="text-sm mt-1">
                Order ID: {orderData.orderId}
              </p>
            </div>

            {/* 🚚 Logistics */}
            <div className="p-4 border rounded-lg bg-gray-50">
              <h3 className="font-semibold mb-2">Logistics Details</h3>
              <p><strong>Carrier:</strong> {orderData.logistics.carrier}</p>
              <p><strong>Status:</strong> {orderData.logistics.status}</p>
              <p><strong>Estimated Arrival:</strong> {orderData.logistics.estimatedArrival}</p>
              <p><strong>Tracking ID:</strong> {orderData.logistics.trackingId}</p>
            </div>

            <button
              onClick={() => router.push("/")}
              className="mt-4 w-full bg-black text-white py-2 rounded"
            >
              Continue Shopping
            </button>
          </>
        )}

      </div>
    </div>
  )
}

export default CheckoutPage
