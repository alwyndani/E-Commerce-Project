



import React from 'react'
import { ProductCard } from './ProductCard'

export const Products = () => {
  return (
    <div className='py-10 px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center gap-4 text-center'>
            <h1 className='text-xl sm:text-2xl md:text-3xl bg-black text-slate-200 py-2 px-4 rounded w-full max-w-md'>Pick Up Yours</h1>
            <span className='w-16 h-[3px] bg-black mt-2'></span>
            <p className='max-w-full md:max-w-2xl text-gray-600'>
                "Experience the future of technology with just a click. Shop the latest electronics and enjoy cutting-edge innovation delivered straight to your doorstep. Elevate your tech game effortlessly—shop now and stay ahead of the curve!"
            </p>
        </div>
        <div className='max-w-screen-xl mx-auto px-4'>
            <ProductCard />
        </div>
    </div>
  )
}

