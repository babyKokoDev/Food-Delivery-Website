import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag, AiFillHome } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet, FaInfoCircle, FaPhone } from "react-icons/fa";
import { SlLogin } from "react-icons/sl";
import { MdFavorite, MdHelp } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
    const goHome = () => {
         navigate('/')
    }

    const [nav, setNav] = useState(false)
    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            <div className="flex items-center">
                <div onClick={() => setNav(!nav)} className="cursor-pointer">
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
                    Best <span className="font-bold">Eats</span>
                </h1>
                <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                    <p className="bg-black text-white rounded-full p-2">Delivery</p>
                    <p className="p-2">Pickup</p>
                </div>
            </div>
            <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
                <AiOutlineSearch size={20} />
                <input className="bg-transparent p-2 w-full focus:outline-none" type="text" placeholder="Search foods" name="" id="" />
            </div>
            <div className='w-[300px] text-xl text-orange-500 hidden md:block'>
                <marquee behavior="" direction="left">Welcome to our African Restaurant, You can find all sorts of african food of your choice</marquee>  
            </div>
            {nav ? <div onClick={() => setNav(!nav)} className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ''}
            <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
                <AiOutlineClose onClick={() => setNav(!nav)} size={30} className="absolute right-4 top-4 cursor-pointer" />
                <h2 className="text-2xl p-4">
                    Best <span className="font-bold">Eats</span>
                </h2>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                        <Link to="/about"><li className="text-xl py-4 flex cursor-pointer"><FaInfoCircle size={25} className="mr-4" /> About</li></Link>
                        <Link to="/signin"><li className="text-xl py-4 flex cursor-pointer"><SlLogin size={25} className="mr-4" /> Sign In</li></Link>
                        <Link to="/contact"><li className="text-xl py-4 flex"><FaPhone size={25} className="mr-4" /> Contact Us</li></Link>
                        <li className="text-xl py-4 flex"><MdHelp size={25} className="mr-4" /> Help</li>
                        <li className="text-xl py-4 flex"><AiFillTag size={25} className="mr-4" /> Promotions</li>
                        <li className="text-xl py-4 flex"><BsFillSaveFill size={25} className="mr-4" /> Best Ones</li>
                        <li className="text-xl py-4 flex"><FaUserFriends size={25} className="mr-4" /> Invite Friends</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
