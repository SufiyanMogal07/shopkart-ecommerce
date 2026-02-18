"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';

const Productcard = ({ data }) => {
  const [imgSrc, setImgSrc] = useState(data.imageUrl);

  return (
    <Link href={`/products/${data.id}`}>
      <div className='w-full rounded-md text-black overflow-hidden shadow-md transition duration-200 hover:-translate-y-0.5'>
        <div className='w-full h-50 aspect-square relative'>
          <Image className='object-cover' src={imgSrc} fill alt={data.title + " Image"} onError={() => setImgSrc("https://placehold.co/600x400/png")} />
        </div>
        <div className='px-2 py-3'>
          <h2 className='font-semibold md:text-lg text-black mb-1'>{data.title}</h2>
          <h3 className='font-semibold text-[16px] text-gray-700 mb-1'>₹{data.price}</h3>
          <button className='bg-purple-500 hover:bg-purple-600 text-white px-2 py-1 rounded-md text-xs font-semibold'>Add to Cart</button>
        </div>
      </div>
    </Link>
  )
}

export default Productcard