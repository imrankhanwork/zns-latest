import React from "react";
import Logo from "../../assets/zslogo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
/*import { GrUserAdmin } from "react-icons/gr";*/
import DarkMode from "./DarkMode";
/*import { Link } from 'react-router-dom';*/


const Menu = [
  {
    id: 1,
    name: "HOME",
    link: "/#",
  },
  {
    id: 2,
    name: "STICKERS PACK'S",
    link: "/#services",
  },
  {
    id: 3,
    name: "MYSTERY BOX'S",
    link: "/#",
  },
  {
    id: 4,
    name: "NEW ARRIVAL'S",
    link: "/#",
  },
  {
    id: 5,
    name: "TOP RATED",
    link: "/#",
  },
];

const ClothingLinks = [
  {
    id: 1,
    name: "PRINTED T-SHIRT",
    link: "/#",
  },
  {
    id: 2,
    name: "MEN'S WEAR",
    link: "/#",
  },
  {
    id: 3,
    name: "WOMEN'S WEAR",
    link: "/#",
  },
  {
    id: 4,
    name: "KID'S WEAR",
    link: "/#",
  },
];

const TrandingLinks = [
  {
    id: 1,
    name: "TRANDING ITEM'S",
    link: "/#",
  },
  {
    id: 2,
    name: "AMIME STICKER'S",
    link: "/#",
  },
  {
    id: 3,
    name: "HOLOGRAPHIC STICKER'S",
    link: "/#",
  },
  {
    id: 4,
    name: "MEME PACK'S",
    link: "/#",
  },
  {
    id: 5,
    name: "LAPTOP SKIN'S",
    link: "/#",
  },
  {
    id: 6,
    name: "BEST SELLING",
    link: "/#",
  },
  {
    id: 7,
    name: "REVIEW'S",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "PREMIUM VINYL STICKER'S",
    link: "/#",
  },
  {
    id: 2,
    name: "CREDIT CARD SKIN'S",
    link: "/#",
  },
  {
    id: 3,
    name: "REFLECTIVE BUMPER STICKER'S",
    link: "/#",
  },
  {
    id: 4,
    name: "MINI STICKER SHEET'S",
    link: "/#",
  },
   {
    id: 5,
    name: "LAPTOP & PHONE SKIN'S",
    link: "/#",
  },
   {
    id: 6,
    name: "INFINITY STICKER'S",
    link: "/#",
  },
  {
    id: 7,
    name: "CUSTOM DESIGN'S",
    link: "/#",
  },
];


const Navbar = ({ handleOrderPopup }) => {
  return ( 
  <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">

    {/* upper Navbar */}
    <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex items-center gap-0">
              <img src={Logo} alt="Logo" className="w-14 h-14 object-contain" />
              Designs
            </a>
            </div>


            {/* search bar */}
            <div className="flex item-center gap-4">
                <div className="relative group hidden sm:block">
                    <input 
                    type="text" 
                    placeholder="search" 
                    className="h-10 w-[200px]  sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border 
                    border-grey-300 px-4 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800 "
                    />
                    <IoMdSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 group-hover:text-primary" />
                </div>

           
            
            {/* order button*/}
            <button
            onClick={() => handleOrderPopup()}
            className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-3 px-5 rounded-full flex items-center gap-2 group"
            >
                <span className="group-hover:block hidden transition-all duration-200">
                Order
                </span>
                <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            
            {/* DarkMode switch */}
            <div /*className="h-10 flex items-center"*/ >
                <DarkMode/>
            </div>
        </div>
      </div> 
    </div>

    {/* lower Navbar */}
    <div data-aos="zoom-in" className="flex justify-center">
        <ul className="flex flex-wrap items-center gap-x-4 md:gap-x-8 lg:gap-x-7">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}

           {/* CLOTHING Dropdown */}
        <li className="group relative cursor-pointer">
          <a href="#" className="flex items-center gap-[2px] py-2">
            CLOTHING 
            <span>
            <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </span>
        </a>
              <div className="absolute z-[999] hidden group-hover:block w-[200px] rounded-md bg-white dark:bg-gray-900">
           <ul>
            {ClothingLinks.map((data) => (
                <li key={data.id}>
                   <a
                      href={data.link}
                      className="inline-block w-full whitespace-nowrap rounded-md p-2 hover:bg-primary/20"
                    >
                    {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </li>

          {/* TRANDING ITEMS Dropdown */}
        <li className="group relative cursor-pointer">
          <a href="#" className="flex items-center gap-[2px] py-2">
            TRANDING 
            <span>
            <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </span>
        </a>
              <div className="absolute z-[999] hidden group-hover:block w-[200px] rounded-md bg-white dark:bg-gray-900">
           <ul>
            {TrandingLinks.map((data) => (
                <li key={data.id}>
                   <a
                      href={data.link}
                      className="inline-block w-full whitespace-nowrap rounded-md p-2 hover:bg-primary/20"
                    >
                    {data.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </li>

          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              STICKERS & SKINS
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white dark:bg-gray-900 
            p-2 text-black dark:text-white shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full  rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;