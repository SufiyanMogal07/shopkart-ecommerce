import { ShoppingCart } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-violet-600 text-white px-8 md:px-30 py-3 flex justify-between'>
      <h2 className='text-2xl font-semibold flex font-mono'><ShoppingCart className='font-bold mr-2'/> SHOP<span className='text-gray-300'>KART</span></h2>

      <button className='text-white font-semibold hover:underline transition-all duration-300'>View Cart</button>
    </div>
  )
}

export default Navbar