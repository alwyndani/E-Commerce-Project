import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/ZenSlice";
import { ToastContainer, toast } from "react-toastify";

const Product = () => {

  const dispatch = useDispatch();

  const [details, setDetails] = useState({});
  const [bstSlr, setBestSlr] = useState({});
  const [baseQty, setBaseQty] = useState(1);
  const formatPrice = (price) => `₹${price.toLocaleString()}`;

  const location = useLocation();
  useEffect(() => {
      setDetails(location.state.product)      
  }, [location.state.product]);  

  const seller = useLocation();
  useEffect(()=> {
    setBestSlr(seller.state.bestSlr)
  }, [seller.state.bestSlr] )
   
  const handleAddToCart = (product) => {
    dispatch(addToCart({
      _id: product._id,
      title: product.title,
      image: product.image,
      price: product.newPrice,
      Quantity: baseQty,
      description: product.description
    }));
    toast.success(`${product.title.substring(0, 25)}... is added to the cart`);
  };

  const productToDisplay = location.state.product || bstSlr;

  return (
    <div className=" flex flex-col">
   
       <div className="max-w-screen-xl mx-auto my-10 h-96 flex gap-10">
        <div className="w-2/5 relative">
        <img
              className="h-full w-full object-cover"
              src={productToDisplay.image}
              alt={productToDisplay.alt}
            />
            <div className="absolute top-4 right-0">
              {productToDisplay.isNow && (
                <p className="bg-black text-white font-semibold font-titleFont px-8 py-1">Sale</p>
              )}
            </div>
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-12">
          <div>
            <h2 className="text-3xl font-semibold">{productToDisplay.title}</h2>
            <div className="flex items-center gap-4 mt-3">
              <p className="line-through font-base text-gray-500">{formatPrice(Number(productToDisplay.oldPrice))}</p>
              <p className="text-2xl font-medium text-gray-900">{formatPrice(Number(productToDisplay.newPrice))}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-base">
            <div className="flex">
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            </div>
            <p className="text-xs text-gray-500">(1 Customer review)</p>
          </div>
          <div className="flex gap-4">
            <div className=" flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 text-sm font-semibold">
                <button onClick={()=> setBaseQty(baseQty === 1 ? 1 : baseQty - 1)} className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">-</button>
                <span>{baseQty}</span>
                <button onClick={()=> setBaseQty(baseQty + 1)} className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">+</button>
              </div>
            </div>
            <button onClick={()=> handleAddToCart(productToDisplay)} className="bg-black text-white py-3 px-6 active:bg-gray-800">Add to Cart</button>
          </div>
        </div>
      </div>
      <div className="container max-w-screen-xl mx-auto mb-10">
        <h2 className="text-lg font-semibold">About this item :</h2>
        <p className="text-base text-gray-500 mt-3">{productToDisplay.description}</p>
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
