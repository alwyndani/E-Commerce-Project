/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import {deleteCart } from "../redux/ZenSlice";
import { ToastContainer, toast } from "react-toastify";


const CartItem = () => {
  const dispatch = useDispatch();

  const [baseQty, setBaseQty] = useState(1);

  const productData = useSelector((state) => state.zen.productData);
  console.log(productData);

  const formatPrice = (price) => `₹${price.toLocaleString()}`;

  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl">Dashboard</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div
            key={item._id}
            className="flex items-center mt-6 justify-between gap-6"
          >
            <div className="flex items-center gap-2">
              <MdOutlineClose
                onClick={()=> dispatch(deleteCart(item._id)) & toast.error}
                className="text-xl text-gray-600 hover:text-rose-800 hover:border-2 cursor-pointer duration-500"
              />
              <img
                className="w-32 h-32 object-cover"
                src={item.image}
                alt="cart-itemimg"
              />
            </div>

            <h2 className="w-32">{item.title.substring(0, 34)}...</h2>
            <p className="w-10">Rs {item.price}</p>
            <div className="w-50 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-2 text-sm font-semibold">
                <button
                  onClick={() => setBaseQty(baseQty === 1 ? 1 : baseQty - 1)}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{baseQty}</span>
                <button
                  onClick={() => setBaseQty(baseQty + 1)}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <p className="w-14">
              {" "}
              {formatPrice(
                item.Quantity * Number(item.price.replace(/₹|,/g, ""))
              )}{" "}
            </p>
          </div>
        ))}
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
      theme="dark" />
    </div>
  );
};

export default CartItem;
