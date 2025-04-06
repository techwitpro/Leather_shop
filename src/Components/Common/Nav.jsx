import React from 'react';
import { logo, search, shoppingbag, user } from '../../assets'; // Adjust the path as necessary

const Nav = () => {
  return (
    <div className="flex items-center justify-between px-4 py-2 container">
      {/* Left: Navigation Links */}
      <div className="flex inline-block gap-4 rubik w-[34px] h-[24px] pl-4 mr-4">
        <a href="#" className="text-gray-700 hover:text-black">Home</a>
        <a href="#" className="text-gray-700 hover:text-black">Shop</a>
        <a href="#" className="text-gray-700 hover:text-black inline-block align-middle">About</a>
      </div>

      {/* Center: Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 px-4">
        <img src={logo} alt="Logo" className="h-8" />
      </div>

      {/* Right: Icons */}
      <div className="flex gap-4 pr-4 ml-4">
        <button>
          <img src={search} alt="search" className="h-6 w-6" />
        </button>
        <button>
          <img src={shoppingbag} alt="shoppingbag" className="h-6 w-6" />
        </button>
        <button>
          <img src={user} alt="user" className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Nav;
