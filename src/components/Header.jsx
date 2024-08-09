import React from 'react'
import { cartimg, man, ZenLogo } from '../assets/index.js'

export const Header = () => {
    return (
    <div className=" w-full h-22 bg-white border-b-[1px] border-b-gray-800">
        <div className='flex max-w-screen-xl h-full mx-auto justify-between items-center'>
            <div>
                <img className='w-28' src={ZenLogo} alt='ZenZest logo'/>
            </div>
        <div className='flex gap-8 items-center'> 
            <ul className='flex gap-8 items-center'>
            <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont'>Home</li>
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont'>Pages</li>
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont'>Shop</li>
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont'>Element</li>
                <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-titleFont'>Blog</li>
            </ul>
            <div className='flex'>
                <img className='w-8' src={cartimg} alt='cartimg'/>
                <span className='text-sm font-semibold font-titleFont'>: 0</span>
            </div>
            <img className='w-10' src={man} alt='userlogo' />
        </div>
        </div>
    </div>
    )
}
