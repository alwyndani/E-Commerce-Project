import React from "react";
import { cardIcons, ZenLogo } from "../assets";
import {
  FaGithub,
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa6";
import { MdAccountCircle, MdSpatialTracking, MdContactSupport} from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";



export const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-3">
          <img className="w-32" src={ZenLogo} alt="logo" />
          <p className="text-white text-sm tracking-wide">. ZenZestTs.com</p>
          <img className="w-32" src={cardIcons} alt="payment-icons" />
          <div className="flex gap-3 text-l text-gray-400">
            <FaGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Locate Us</h2>
          <div className="text-base flex flex-col gap-1">
            <p>Byculla, Mumbai, Maharashtra, India</p>
            <p>Mobile: 02296 54658812</p>
            <p>Phone: 02296 25898559</p>
            <p>e-mail: zenzestts@gmail.com</p>
          </div>
        </div>

        <div>
        <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
        </div>
      </div>
    </div>
  );
};
