



import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/ZenSlice";
import { ToastContainer, toast } from "react-toastify";

const Product = () => {
  const dispatch = useDispatch();
  const [item, setItem] = useState({});
  const [baseQty, setBaseQty] = useState(1);
  const formatPrice = (price) => `₹${price.toLocaleString()}`;

  const location = useLocation();
  useEffect(() => {
    setItem(location.state?.product || {});
  }, [location]);

  console.log(location);
  

  const handleAddToCart = (product) => {
    dispatch(addToCart({
      _id: product._id,
      title: product.title,
      image: product.image,
      price: product.newPrice,
      Quantity: baseQty,
      description: product.description,
    }));
    toast.success(`${product.title.substring(0, 25)}... is added to the cart`);
  };

  const productToDisplay = item;

  return (
    <div className="flex flex-col">
      <div className="max-w-screen-xl mx-auto my-10 px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-auto">
          <div className="relative">
            <img
              className="w-full h-full object-cover"
              src={productToDisplay.image}
              alt={productToDisplay.alt}
            />
            {productToDisplay.isNow && (
              <div className="absolute top-4 right-4 bg-black text-white font-semibold px-4 py-1 rounded">
                Sale
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">{productToDisplay.title}</h2>
              <div className="flex items-center gap-4 mt-3">
                <p className="line-through text-gray-500">{formatPrice(Number(productToDisplay.oldPrice))}</p>
                <p className="text-xl md:text-2xl font-medium text-gray-900">{formatPrice(Number(productToDisplay.newPrice))}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-base">
              <div className="flex text-yellow-500">
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
              </div>
              <p className="text-xs text-gray-500">(1 Customer review)</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center justify-between border p-3 rounded-md text-gray-500">
                <p className="text-sm">Quantity</p>
                <div className="flex items-center gap-4 text-sm font-semibold">
                  <button 
                    onClick={() => setBaseQty(baseQty === 1 ? 1 : baseQty - 1)}
                    className="border h-8 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  >
                    -
                  </button>
                  <span>{baseQty}</span>
                  <button 
                    onClick={() => setBaseQty(baseQty + 1)}
                    className="border h-8 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  >
                    +
                  </button>
                </div>
              </div>
              <button 
                onClick={() => handleAddToCart(productToDisplay)}
                className="bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 active:bg-gray-900 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-lg font-semibold">About this item :</h2>
          <p className="text-base text-gray-500 mt-3">{productToDisplay.description}</p>
        </div>
      </div>
      <ToastContainer 
        position="top-left"
        autoClose={2000}
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

export default Product;
