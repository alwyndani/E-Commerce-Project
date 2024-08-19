import React from "react";
import { woofer } from "../assets";
import { FaSearch,FaUserCheck } from "react-icons/fa";
import { IoHeadset,IoMan } from "react-icons/io5";
import { SiStylelint } from "react-icons/si";
import { FaBasketShopping } from "react-icons/fa6";


export const About = () => {
  return (
    <div className="bg-black">
      <div className="w-full flex">
        <div className="w-3/5 bg-black">
          <img className="w-screen" src={woofer} alt="about-us-img"></img>
        </div>
        <div className="bg-slate-800 w-2/5 ">
          <div className=" text-blue-300 font-serif flex flex-col gap-4 justify-center items-center pt-20">
            <p className="text-4xl"> Extraordinary style with Zen</p>
            <p className="text-2xl">
              "Bring Your Passion to Life with Our Products"
            </p>
          </div>
          <div className="flex justify-center py-9">
            <p className="text-gray-300 font-bodyFont w-[500px]">
              {" "}
              Welcome to ZenZest Treasures, your ultimate destination for
              premium electronics! From cutting-edge home theatre systems and
              high-performance cameras to the latest PlayStation consoles and
              stylish smartwatches, we offer a curated selection of top-tier
              gadgets to enhance your digital lifestyle. Discover quality,
              innovation, and unbeatable value at ZenZest Treasures.
            </p>
          </div>
          <div className="text-gray-300 flex justify-center gap-9 font-titleFont">
            <p>→ Latest Collections</p>
            <p>→ Quality that Inspires</p>
            <p>→ Brands that Matter</p>
          </div>
        </div>
      </div>

      <div className="text-center flex flex-col items-center py-16">
        <p className="text-5xl font-titleFont text-slate-300 py-12 font-bold">Our Journey So Far •••</p>
        <div className="grid grid-cols-3 border-y-8 border-red-700   gap-24 py-9">
           <div className="flex flex-col text-slate-300 bg-emerald-900 p-5 rounded-2xl hover:scale-105 duration-300 items-center justify-center w-96">
             <FaSearch className="text-4xl text-red-900"/>
            <h2 className="text-2xl text-teal-500 py-5">Founded in 2012</h2>
            <p>Established in 2012, ZenZest Treasures specializes in providing a curated selection of high-quality electronics. From home theatre systems and cameras to PlayStation consoles and smartwatches, we bring you the latest innovations to enhance your digital lifestyle.</p>
           </div>
           <div className="flex flex-col text-slate-300 bg-emerald-900 p-5 rounded-2xl hover:scale-105 duration-300 items-center justify-center w-96">
             <FaUserCheck className="text-4xl text-red-900"/>
            <h2 className="text-2xl text-teal-500 py-5">Trusted By Millions</h2>
            <p> Trusted by millions since 2012, is your go-to source for premium electronics. Our extensive selection, including home theatres, cameras, PlayStation consoles, and smartwatches, is curated to meet the highest standards of quality and innovation. Join our satisfied customers and experience the best in tech with ZenZest Treasures.</p>
           </div> <div className="flex flex-col text-slate-300 bg-emerald-900 p-5 rounded-2xl hover:scale-105 duration-300 items-center justify-center w-96">
             <IoHeadset className="text-4xl  text-red-900"/>
            <h2 className="text-2xl text-teal-500 py-5">Quality That Speaks</h2>
            <p>"Quality that Speaks" is more than a promise—it's our commitment. Since 2012, we've delivered top-tier electronics, from immersive home theatres and advanced cameras to the latest PlayStation consoles and smartwatches. Experience unparalleled craftsmanship and innovation with every product, and let the quality of our offerings speak for itself.</p>
           </div> <div className="flex flex-col text-slate-300 bg-emerald-900 p-5 rounded-2xl hover:scale-105 duration-300 items-center justify-center w-96">
             <SiStylelint className="text-4xl  text-red-900"/>
            <h2 className="text-2xl text-teal-500 py-5">Defining Fashion</h2>
            <p>we’re not just about technology—we’re about defining fashion in electronics. Since 2012, our carefully curated selection of smartwatches and sleek gadgets blends cutting-edge innovation with stylish design. Elevate your tech game and make a statement with products that embody both functionality and flair.</p>
           </div> <div className="flex flex-col text-slate-300 bg-emerald-900 p-5 rounded-2xl hover:scale-105 duration-300 items-center justify-center w-96">
             <IoMan className="text-4xl  text-red-900"/>
            <h2 className="text-2xl text-teal-500 py-5">Apparels</h2>
            <p>Our products represent the pinnacle of innovation and quality. Since 2012, we’ve curated a diverse range of cutting-edge electronics, from immersive home theatres and high-resolution cameras to the latest PlayStation consoles and sleek smartwatches. Each product is selected to deliver exceptional performance and style, ensuring you get the best in technology and design.</p>
           </div> <div className="flex flex-col text-slate-300 bg-emerald-900 p-5 rounded-2xl hover:scale-105 duration-300 items-center justify-center w-96">
             <FaBasketShopping className="text-4xl  text-red-900"/>
            <h2 className="text-2xl text-teal-500 py-5">Quick Shop Accessories</h2>
            <p>Explore our "Quick Shop Accessories" for all the essential add-ons you need. Since 2012, we’ve offered a curated selection of high-quality accessories to complement your electronics, ensuring you get the most out of your gadgets. From stylish cases and durable chargers to innovative gadgets, find everything you need with ease and efficiency.</p>
           </div>
        </div>
      </div>
    </div>
  );
};
