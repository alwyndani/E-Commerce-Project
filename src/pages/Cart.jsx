import React from 'react'
import { mainCartImg } from '../assets'
import CartItem from '../components/CartItem'
import { ToastContainer, toast } from "react-toastify";

export const Cart = () => {

  return (
    <div>
      <img className='w-full h-60 object-cover'
        src={mainCartImg} alt=" cart-img" />
      <div className='max-w-screen-xl mx-auto py-20 flex'>
        <CartItem />
        <div className='w-1/3 bg-gray-200 py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className='text-2xl font-medium'>Inventory Totals</h2>
            <p className='flex items-center gap-4 text-base'>
              Subtotal{" "}
              <span className='font-titleFont font-bold  text-lg'>Rs 11548</span>
            </p>
            <p className='flex items-start gap-4 text-base'>
              Shipping{" "}
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, voluptas consectetur nostrum ratione ipsum facilis libero quisquam iste vero iure dolore ab quae dolorum maiores aliquid. Ullam minus voluptas ex?</span>
            </p>
          </div>
          <p className='font-titleFont font-semibold mt-6 flex justify-between'>
            Total <span className='text-xl font-bold'>Rs 11548</span>
          </p>
          <button className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-100'>Proceed to checkout</button>
        </div>
      </div>
      <ToastContainer 
      position="top-left"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </div >
  )
}