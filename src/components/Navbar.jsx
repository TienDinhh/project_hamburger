import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
export const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="max-w[1600px] mx-auto flex justify-between items-center p-4">
      <div onClick={() => setNav(!nav)} className="flex items-center cursor-pointer">
        <div>
          <AiOutlineMenu size={30} />
        </div>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span classNam="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 focus:outline-none w-full"
          type="text"
          placeholder="Search food"
        />
      </div>
      <button className="bg-black text-white hidden sm:flex items-center py-2 rounded-full">
        <BsFillCartFill size={20} className="mr-2" />
        Cart
      </button>
      {/* //Mobile Menu */}

      
          <div onClick={() => setNav(!nav)} className={nav ? "bg-black/80 fixed w-full h-screen z-10 top-0 left-0" : "bg-black/80 fixed w-full h-screen z-10 top-0 left-[-100%]"}></div>

          <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
            <AiOutlineClose
              onClick={() => setNav(!nav)}
              size={30}
              className="absolute right-4 top-4 cursor-pointer"
            />
            <h2 className="text-2xl p-4">Eats</h2>
            <nav>
              <ul className="pl-4">
                <li className="text-xl py-4 flex text-gray-800">
                  <TbTruckDelivery size={25} className="mr-4" />
                  Order
                </li>
                <li className="text-xl py-4 flex text-gray-800">
                  <MdFavorite size={25} className="mr-4" />
                  Favorites
                </li>
                <li className="text-xl py-4 flex text-gray-800">
                  <FaWallet size={25} className="mr-4" />
                  Wallet
                </li>
                <li className="text-xl py-4 flex text-gray-800">
                  <MdHelp size={25} className="mr-4" />
                  Help
                </li>
                <li className="text-xl py-4 flex text-gray-800">
                  <AiFillTag size={25} className="mr-4" />
                  Promotions
                </li>
                <li className="text-xl py-4 flex text-gray-800">
                  <BsFillSaveFill size={25} className="mr-4" />
                  Best Ones
                </li>
                <li className="text-xl py-4 flex text-gray-800">
                  <FaUserFriends size={25} className="mr-4" />
                  Invite Friends
                </li>
              </ul>
            </nav>
          </div>


    </div>
  );
};
