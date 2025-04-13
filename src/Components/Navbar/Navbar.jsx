import React, { useState } from 'react';
import { logo, search, bag, user } from '../../assets'; // Adjust the path as necessary
import { Link } from 'react-router-dom';

// Simple SVG icons for hamburger and close (replace with your preferred icons if needed)
const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // Removed justify-center items-end mr-4 as they might not apply directly to SVG content positioning
    // Control positioning via the parent container or add specific x, y if needed within SVG
    className="h-6 w-6 mr-4" // Basic sizing, adjust as needed
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3} // Increased strokeWidth slightly for better visibility, adjust if needed
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      // All lines now start at x=4, end at x=20 (4 + 16)
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked (optional but good UX)
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  }

  return (
    // Add relative positioning for potential absolute children like the mobile menu
    <nav className="relative container mx-auto p-2">
      <div className="flex items-center justify-between">

        {/* --- Left Side --- */}
        <div className="flex items-center gap-6">
          {/* Mobile Logo (Visible on Mobile, hidden on md+) */}
          <Link to="/" className="flex-shrink-0 md:hidden">
            <img src={logo} alt="Logo" className="h-7 ml-5 items-center justify-center" /> {/* Adjust height as needed */}
          </Link>

          {/* Desktop Navigation Links (Hidden on Mobile, visible on md+) */}
          <div className="hidden md:flex gap-6 rubik items-center">
            <div className="font-normal leading-[100%] tracking-normal text-md md:text-lg xl:text-xl flex gap-6">
              <Link to="/home" className="text-gray-700 hover:text-black">Home</Link>
              <Link to="/shop" className="text-gray-700 hover:text-black">Shop</Link>
              <Link to="/about" className="text-gray-700 hover:text-black whitespace-nowrap">About us</Link>
            </div>
          </div>
        </div>


        {/* --- Center: Desktop Logo (Hidden on Mobile, visible on md+) --- */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 px-2">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-7" /> {/* Adjust height as needed */}
          </Link>
        </div>


        {/* --- Right Side --- */}
        <div className="flex items-center ">
          {/* Action Icons */}
          <div className='hidden md:flex gap-6'>
            <button aria-label="Search" className="text-gray-700 hover:text-black">
              <img src={search} alt="search" className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button aria-label="Shopping Bag" className="text-gray-700 hover:text-black">
              <img src={bag} alt="shopping bag" className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button aria-label="User Account" className="text-gray-700 hover:text-black">
              <img src={user} alt="user" className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          {/* Hamburger Menu Button (Visible on Mobile, hidden on md+) */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              className="text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu (Overlay) --- */}
      {/* This part remains the same */}
      <div
        className={`
          md:hidden fixed inset-0 z-40 bg-white transition-transform transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        // Add role and aria-modal for better accessibility if it behaves like a modal
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMobileMenuOpen}
      >
        {/* Close button inside mobile menu */}
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMobileMenu}
            aria-label="Close mobile menu"
            className="text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div className="flex flex-col items-center justify-center h-full -mt-16"> {/* Adjust mt to position vertically */}
          <div className="rubik flex flex-col gap-8 text-center text-xl">
            <Link to="/home" className="text-gray-700 hover:text-black" onClick={handleMobileLinkClick}>Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-black" onClick={handleMobileLinkClick}>Shop</Link>
            <Link to="/about" className="text-gray-700 hover:text-black whitespace-nowrap" onClick={handleMobileLinkClick}>About us</Link>
            {/* Optional: Add icons to mobile menu too */}
            <div className="flex gap-8 pt-4">
              <button aria-label="Search" onClick={handleMobileLinkClick} className="text-gray-700 hover:text-black">
                <img src={search} alt="search" className="h-6 w-6" />
              </button>
              <button aria-label="Shopping Bag" onClick={handleMobileLinkClick} className="text-gray-700 hover:text-black">
                <img src={bag} alt="shoppingbag" className="h-6 w-6" />
              </button>
              <button aria-label="User Account" onClick={handleMobileLinkClick} className="text-gray-700 hover:text-black">
                <img src={user} alt="user" className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Optional: Overlay to dim background when mobile menu is open */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black opacity-50"
          onClick={toggleMobileMenu} // Close menu when clicking overlay
          aria-hidden="true" // Hide from screen readers
        ></div>
      )}
    </nav>
  );
};

export default Navbar;