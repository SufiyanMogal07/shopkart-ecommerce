import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {

  return (
    <div className='sticky top-0 left-0 z-10 bg-violet-600/90 backdrop-blur-md text-white px-8 md:px-30 py-3 flex justify-between'>
      <Link href={"/"} className='text-2xl font-semibold flex font-mono cursor-pointer'><ShoppingCart className='font-bold mr-2'/> SHOP<span className='text-gray-300'>KART</span></Link>

      <button className='text-white font-semibold hover:underline transition-all duration-300'>View Cart</button>
    </div>
  )
}

export default Navbar