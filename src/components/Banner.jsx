import React, { useState } from "react";
import { theater1, plstation, gopro, smartwatch } from "../assets";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";


export const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

  const data = [plstation, theater1, gopro, smartwatch];

const prevSlide =()=> {
  setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1)
}
const nextSlide =()=> {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1)
  }
  

  return (
    <div className="overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div style={{ transform: `translateX(-${currentSlide * 100}vw)` }} className="w-[400vw] h-[100vh] flex transition-transform duration-1000">
          <div className="relative">
            <img
              className="w-screen h-full object-cover "
              src={data[0]}
              alt="homeTheater"
              loading="priority"
            />
            <div className="absolute w-96 h-min shadow-2xl h-full top-44 left-48  p-1 ">
              <p className="text-black font-bodyFont font-semibold  text-xl bg-opacity-50">
                "Level up your gaming experience with exclusive deals and
                unbeatable prices on the PlayStation"
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-screen h-full object-cover relative"
              src={data[1]}
              alt="playstation"
            />
            <div className="absolute  w-96 h-min shadow-2xl h-full top-14 right-[663px]  p-1 ">
              <p className="text-black font-bodyFont font-extrabold  text-xl ">
              "Experience movie magic like never before—discover unbeatable deals on home theater systems today!"
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-screen h-full object-cover relative"
              src={data[2]}
              alt="gopro"
            />
            <div className="absolute  w-96 h-min shadow-2xl h-full top-44 left-48  p-1 ">
              <p className="text-black font-bodyFont font-semibold  text-xl bg-opacity-50">
              "Capture your adventures in stunning detail with GoPro—where every moment becomes a masterpiece."
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              className="w-screen h-full object-cover relative"
              src={data[3]}
              alt="smartwatch"
            />
            <div className="absolute  w-96 h-min shadow-2xl h-full top-44 right-56  p-1 ">
              <p className="text-black font-bodyFont font-semibold  text-xl bg-opacity-50">
              "Track your health, manage your time, and stay connected with smartwatches crafted for modern living."
              </p>
            </div>
          </div>
        </div>
        <div className="absolute w-fit left-8 right-0 mx-auto flex gap-8 bottom-36 text-xl">
            <div onClick={prevSlide} className="w-14 border-[1px] border-gray-700 h-10 flex justify-center items-center hover:cursor-pointer hover:bg-gray-500 hover:text-white active:bg-gray-900 duration-300 rounded-2xl"><FaAnglesLeft /></div>
            <div onClick={nextSlide} className="w-14 border-[1px] border-gray-700 h-10 flex justify-center items-center hover:cursor-pointer hover:bg-gray-500 hover:text-white active:bg-gray-900 duration-300 rounded-2xl"><FaAnglesRight/></div>
        </div>
      </div>
    </div>
  );
};
