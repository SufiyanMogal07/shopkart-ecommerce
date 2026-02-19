import { ShoppingBag, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {

  return (
    <div className='sticky top-0 left-0 z-10 bg-violet-600/80 backdrop-blur-sm text-white px-8 md:px-30 py-5 flex items-center justify-between'>
      <Link href={"/"} className='text-2xl font-semibold flex font-mono cursor-pointer'><ShoppingBag className='font-bold mr-2' /> SHOP<span className='text-gray-300'>KART</span></Link>

      <Link href={"/cart"} className='text-white font-semibold pb-0.5 transition-all duration-300 flex'><ShoppingCart size={20} className='font-bold mr-2' />View Cart</Link>
    </div>
  )
}

export default Navbar