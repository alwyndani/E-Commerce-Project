

/* eslint-disable react/jsx-key */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDescription, MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import {
  decreamentQuantity,
  deleteCart,
  increamentQuantity,
  resetCart,
} from "../redux/ZenSlice";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import './CartItem.css'

const CartItem = () => {
  const dispatch = useDispatch();

  const productData = useSelector((state) => state.zen.productData);

  const formatPrice = (price) => `₹${price.toLocaleString()}`;

  return (
    <div className="w-full  md:w-2/3 pr-4 md:pr-10">
      <div className="w-full">
        <h2 className="font-titleFont text-2xl text-center">Dashboard</h2>
      </div>
      <div className="ccc">
        {productData.length !== 0 ? (
          <>
            <p className="font-bodyFont py-1">
              You have added {productData.length} item{productData.length > 1 ? 's' : ''} to your cart.
            </p>
            {productData.map((item) => (
              <div
                key={item._id}
                className="flex cartItem flex-col md:flex-row items-start md:items-center mt-6 justify-between gap-6 border-b pb-4"
              >
                <div className="flex cartProduct items-center gap-2 md:gap-4">
                  <MdOutlineClose
                    onClick={() => {
                      dispatch(deleteCart(item._id));
                    }}
                    className="text-xl text-gray-600 hover:text-rose-800 hover:border-2 cursor-pointer duration-500"
                  />
                  <img
                    className="w-32 cartItem-img h-24 md:w-36 md:h-32 object-cover"
                    src={item.image}
                    alt="cart-itemimg"
                  />
                </div>

                <div className="flex-1">
                  <h2 className="text-lg md:text-base">{item.title.length > 34 ? `${item.title.substring(0, 34)}...` : item.title}</h2>
                  <p className="text-sm md:text-base">{formatPrice(item.price)}</p>
                </div>
                
                <div className="flex items-center justify-between text-gray-500 gap-4 border p-2 md:p-3">
                  <p className="text-sm">Quantity</p>
                  <div className="flex items-center text-sm font-semibold">
                    <button
                      onClick={() =>
                        dispatch(
                          decreamentQuantity({
                            _id: item._id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            Quantity: 1,
                            description: item.description,
                          })
                        )
                      }
                      className="border h-6 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      -
                    </button>
                    <span>{item.Quantity}</span>
                    <button
                      onClick={() =>
                        dispatch(
                          increamentQuantity({
                            _id: item._id,
                            title: item.title,
                            image: item.image,
                            price: item.price,
                            Quantity: 1,
                            description: item.description,
                          })
                        )
                      }
                      className="border h-6 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                    >
                      +
                    </button>
                  </div>
                </div>

                <p className="text-lg md:text-base">
                  {formatPrice(item.Quantity * item.price)}
                </p>
              </div>
            ))}
            <div className="mt-8 flex flex-col md:flex-row gap-4">
              <button
                className="bg-red-500 text-white py-2 px-4 hover:bg-red-800 duration-300"
                onClick={() => {
                  dispatch(resetCart());
                }}
              >
                Reset Cart
              </button>
              <Link to="/">
                <button className="flex items-center gap-1 text-gray-400 hover:text-black duration-300">
                  <HiOutlineArrowLeft />
                  <span>Go Shopping</span>
                </button>
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center w-full mt-8">
            <h2 className="text-orange-600 shadow-lg text-lg">
              Your Dashboard is empty. Please go back to shopping and add
              products to the Dashboard.
            </h2>
            <Link to="/">
              <button className="mt-8 text-gray-400 hover:text-black duration-300">
                <span className="flex items-center">
                  <HiOutlineArrowLeft />
                  Go Shopping
                </span>
              </button>
            </Link>
          </div>
        )}
      </div>

      <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default CartItem;
