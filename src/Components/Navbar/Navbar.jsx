import React from 'react';
import { logo, search, bag, user } from '../../assets'; // Adjust the path as necessary
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-2 py-0 container">
      {/* Left: Navigation Links */}
      <div className="flex gap-6 rubik w-[34px] h-[24px] pl-4 mr-4">
        <a href="/home" className="text-gray-700 hover:text-black">Home</a>
        <a href="/shop" className="text-gray-700 hover:text-black">Shop</a>
        <a href="/about" className="text-gray-700 hover:text-black inline-block align-middle whitespace-nowrap">About us</a>
      </div>

      {/* Center: Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 px-2">
        <img src={logo} alt="Logo" className="h-6" />
      </div>

      {/* Right: Icons */}
      <div className="flex gap-6 pr-4 ml-4">
        <button>
          <img src={search} alt="search" className="h-5 w-5" />
        </button>
        <button>
          <img src={bag} alt="shoppingbag" className="h-5 w-5" />
        </button>
        <button>
          <img src={user} alt="user" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
