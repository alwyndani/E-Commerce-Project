import React from "react";
import { cartimg, gopro2, man, ZenLogo } from "../assets/index.js";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";
import { ProductCard } from "./ProductCard.jsx";
import Product from "./Product.jsx";

export const Header = () => {
  const navigate = useNavigate();
  const formatPrice = (price) => `₹${price.toLocaleString()}`;

  const userInfo = useSelector((state) => state.zen.userInfo);   //for displaying user login details in header 
  const productData = useSelector((state) => state.zen.productData);  //for displaying cart length in header 
  const products = useSelector((state) => state.zen.products); //for displaying best seller details in header 
  console.log(userInfo);
  
  const displayProducts = (item, title) => {
    const _id = title;
    const idstring = (_id) => {
      const value = String(_id).toLowerCase().split(" ").join("");
      return value.substring(0, 40);
    };
    const rootId = idstring(_id);
    navigate(`/product/${rootId}`, {
      state: {
        product: item,
      },
    });
  };

  const handlePS = () => {
    navigate("/productCard");
  };

  return (
    <div className=" w-full h-22 sticky top-0 z-50 bg-slate-100 border-b-[1px] border-b-gray-800">
      <div className="flex max-w-screen-xl h-full mx-auto justify-between items-center">
        <Link to="/">
          <div>
            <img className="w-28" src={ZenLogo} alt="ZenZest logo" />
          </div>
        </Link>
        <div className="flex gap-8 items-center">
          <ul className="flex gap-8 items-center">
            <Link
              to="/"
              className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont"
            >
              About Us
            </Link>
            <div className="dropdown">
              <button className="btn p-0 dropdown-toggle text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont">
                Shop
              </button>

              <ul className="dropdown-menu min-w-max">
                <div className="flex gap-4">
                  <div>
                    <h2 className="text-base font-titleFont font-semibold p-2 bg-slate-200">
                      TOP COLLECTION
                    </h2>
                    <div className="flex flex-col mt-3 gap-4">
                      <li>
                        <button
                          onClick={handlePS}
                          className="dropdown-item"
                          type="button"
                        >
                          Gaming
                        </button>
                      </li>
                      <li>
                        <button  onClick={handlePS} className="dropdown-item" type="button">
                          {" "}
                          Home Entertainments
                        </button>
                      </li>
                      <li>
                        <button  onClick={handlePS} className="dropdown-item" type="button">
                          Action Cameras
                        </button>
                      </li>
                      <li>
                        <button onClick={handlePS} className="dropdown-item" type="button">
                          Smart Watches
                        </button>
                      </li>
                    </div>
                  </div>
                  <div className="w-72 font-bodyFont">
                    <h2 className="text-base font-titleFont font-semibold p-2 bg-slate-200">
                      BEST SELLER
                    </h2>
                    <div
                      onClick={() =>
                        displayProducts(products[9], products[9].title)
                      }
                    >
                      <img
                        className="w-60 border-4  hover:scale-105 duration-300"
                        src={products[9].image}
                        alt="bestseller-img"
                      />
                      <div className="p-2 ">
                        <p className="text-red-700">Best Selling</p>
                        <p className="font-semibold">
                          {products[9].title.substring(0, 38)}.{" "}
                        </p>
                        <p> {formatPrice(products[9].newPrice)} </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
            <Link
              to="/contact"
              className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont"
            >
              Contact Us
            </Link>
          </ul>
          <Link to="/cart">
            <div className="flex items-center">
              <img className="w-8" src={cartimg} alt="cartimg" />
              <span className="text-sm font-semibold font-titleFont">
                : {[productData.length]}
              </span>
            </div>
          </Link>

          <div className="dropdown">
           <button className="btn flex p-0 items-center gap-1 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img className="w-9" src={userInfo ? userInfo.image : man} alt="userlogo" />
           </button>
            <ul className="dropdown-menu">
            <li><Link to='/login' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Login</Link></li>
            <li><Link to='/profile' className="block px-4 py-2 text-gray-800 hover:bg-gray-200">My Profile</Link></li>           </ul>
          </div>
          {
            userInfo && 
            <p className="text-sm font-titleFont font-semibold underline underline-offset-4">{userInfo.name}</p>
          }
        </div>
      </div>
    </div>
  );
};
