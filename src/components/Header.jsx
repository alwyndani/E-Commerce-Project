import React from "react";
import { cartimg, gopro2, man, ZenLogo } from "../assets/index.js";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css";

export const Header = () => {

const navigate = useNavigate();

  const userInfo = useSelector((state) => state.zen.userInfo);
  console.log(userInfo);
  const productData = useSelector((state) => state.zen.productData);
  console.log(productData);
  const products = useSelector((state) => state.zen.products );
  console.log(products[9].title);
  

const displayProducts=()=> {
  // navigate(`/prozduct/${products[10].title}`)
  }

  const handlePS =()=> {
    // navigate('/cartItem')
  }

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
            <div class="dropdown">
              <button class="btn  dropdown-toggle text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont">
                Shop
              </button>

              <ul class="dropdown-menu min-w-max">
                <div className="flex gap-4">
                  <div >
                    <h2 className="text-base font-titleFont font-semibold p-2 bg-slate-200">
                      TOP COLLECTION
                    </h2>
                    <div className="flex flex-col mt-3 gap-4">
                    <li>
                      <button onClick={handlePS} class="dropdown-item" type="button">
                        Gaming
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        {" "}
                        Home Entertainments
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Action Cameras
                      </button>
                    </li>
                    <li>
                      <button class="dropdown-item" type="button">
                        Smart Watches
                      </button>
                    </li>
                    </div>
                  </div>
                  <div  className="w-72 font-bodyFont">
                    <h2 className="text-base font-titleFont font-semibold p-2 bg-slate-200">
                      BEST SELLER
                    </h2>
                    <div onClick={displayProducts}>
                   <img className="w-60 border-4  hover:scale-105 duration-300" src={gopro2} alt="bestseller-img" />
                  <div className="p-2 ">
                   <p className="text-red-700">Best Selling</p>
                   <p className="font-semibold">GoPro HERO11 Waterproof Action Camera. </p>
                   <p>₹ 35700</p>
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
            <div className="flex">
              <img className="w-8" src={cartimg} alt="cartimg" />
              <span className="text-sm font-semibold font-titleFont">
                : {[productData.length]}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <img
              className="w-9"
              src={userInfo ? userInfo.image : man}
              alt="userlogo"
            />
          </Link>
          {userInfo && (
            <p className="text-sm font-titleFont font-semibold underline underline-offset-4">
              {userInfo.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
