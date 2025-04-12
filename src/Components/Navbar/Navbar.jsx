import React from 'react';
import { logo, search, bag, user } from '../../assets'; // Adjust the path as necessary
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between container ">
      {/* Left: Navigation Links */}
      <div className="hidden md:flex gap-6 rubik pl-4 mr-4 items-center justify-center">
        <div className="font-normal leading-[100%] tracking-normal text-md md:text-lg xl:text-xl flex gap-6">
          <a href="/home" className="text-gray-700 hover:text-black">Home</a>
          <a href="/shop" className="text-gray-700 hover:text-black">Shop</a>
          <a href="/about" className="text-gray-700 hover:text-black whitespace-nowrap">About us</a>
        </div>
      </div>


      {/* Center: Logo */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 px-2 items-center justify-center">
        <img src={logo} alt="Logo" className="h-6 md:h-7" />
      </div>

      {/* Right: Icons */}
      <div className="hidden md:flex gap-6 pr-4 ml-4">
        <button>
          <img src={search} alt="search" className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>
        <button>
          <img src={bag} alt="shoppingbag" className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>
        <button>
          <img src={user} alt="user" className="h-4 w-4 sm:h-6 sm:w-6" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
