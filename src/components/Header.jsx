import React from "react";
import { cartimg, man, ZenLogo } from "../assets/index.js";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {

  const userInfo = useSelector((state)=> state.zen.userInfo);
  console.log(userInfo);
  const productData = useSelector((state) => state.zen.productData);

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
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont">
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont">
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont">
              Blog
            </li>
          </ul>
         <Link to="/cart">
         <div  className="flex">
            <img className="w-8" src={cartimg} alt="cartimg" />
            <span className="text-sm font-semibold font-titleFont">
              : {[productData.length]}
            </span>
          </div>
         </Link>
         <Link to="/login">
          <img className="w-9" src={
            userInfo ? userInfo.image : man
          } alt="userlogo" />
          </Link>
          {
            userInfo && (
              <p className="text-sm font-titleFont font-semibold underline underline-offset-4">{userInfo.name}</p>
            )
          }
        </div>
      </div>
    </div>
  );
};
