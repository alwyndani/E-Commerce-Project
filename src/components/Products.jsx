import React from 'react'
import { ProductCard } from './ProductCard'

export const Products = () => {
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-xl bg-black text-slate-200 py-2 w-80 text-center'>Pick Up Yours</h1>
            <span className='w-20 h-[3px] bg-black'></span>
            <p className='max-w-[700px] text-gray-600 text-center'>"Experience the future of technology with just a click. Shop the latest electronics and enjoy cutting-edge innovation delivered straight to your doorstep. Elevate your tech game effortlessly—shop now and stay ahead of the curve!"</p>
        </div>
        <div className='max-w-screen-xl mx-auto'>
            <ProductCard />
        </div>
    </div>
  )
}
