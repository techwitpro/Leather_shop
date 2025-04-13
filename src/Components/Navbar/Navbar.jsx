import React, { useState, useEffect, useRef } from 'react';
import { logo, search, bag, user } from '../../assets'; // Adjust the path as necessary
import { Link } from 'react-router-dom';

// Simple SVG icons (unchanged, seem fine)
const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6" // Removed mr-4, apply margin on the button if needed
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
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
  // Refs for focus management
  const mobileMenuRef = useRef(null);
  const hamburgerButtonRef = useRef(null);
  const closeButtonRef = useRef(null); // Ref for the close button inside the menu

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  }

  // Effect for focus management and Escape key handling
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      // Focus the close button when menu opens
      closeButtonRef.current?.focus();
      // Add Escape key listener
      document.addEventListener('keydown', handleEscKey);
      // Optional: Trap focus within the modal (more complex, libraries like focus-trap-react can help)
      // Optional: Disable body scroll
      // document.body.style.overflow = 'hidden';
    } else {
      // Return focus to the hamburger button when menu closes
      hamburgerButtonRef.current?.focus();
      // Remove Escape key listener
      document.removeEventListener('keydown', handleEscKey);
      // Optional: Re-enable body scroll
      // document.body.style.overflow = '';
    }

    // Cleanup function
    return () => {
      document.removeEventListener('keydown', handleEscKey);
      // Ensure body scroll is reset if component unmounts while menu is open
      // document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]); // Dependency array ensures this runs when isMobileMenuOpen changes


  return (
    <nav className="relative container mx-auto p-4"> {/* Increased padding slightly */}
      <div className="flex items-center justify-between">

        {/* --- Left Side --- */}
        <div className="flex items-center space-x-6"> {/* Use space-x for consistent spacing */}
          {/* Mobile Logo (Visible on Mobile, hidden on md+) */}
          <Link to="/" className="flex-shrink-0 md:hidden">
            {/* Added ml-0 as spacing is handled by parent space-x */}
            <img src={logo} alt="Logo" className="h-7" />
          </Link>

          {/* Desktop Navigation Links (Hidden on Mobile, visible on md+) */}
          <div className="hidden md:flex items-center space-x-6 rubik"> {/* Use space-x */}
            {/* Removed inner div, simplified structure */}
            {/* Adjusted text size classes for better consistency */}
            <Link to="/home" className="text-gray-700 hover:text-black text-lg">Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-black text-lg">Shop</Link>
            <Link to="/about" className="text-gray-700 hover:text-black text-lg whitespace-nowrap">About us</Link>
          </div>
        </div>


        {/* --- Center: Desktop Logo (Hidden on Mobile, visible on md+) --- */}
        {/* This absolute positioning is fine, but be mindful of potential overlaps on narrow 'md' screens */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-7" />
          </Link>
        </div>


        {/* --- Right Side --- */}
        <div className="flex items-center space-x-6"> {/* Use space-x */}
          {/* Action Icons (Desktop) */}
          <div className='hidden md:flex items-center space-x-6'> {/* Use space-x */}
            <button aria-label="Search" className="text-gray-700 hover:text-black">
              <img src={search} alt="search" className="h-6 w-6" /> {/* Consistent size */}
            </button>
            <button aria-label="Shopping Bag" className="text-gray-700 hover:text-black">
              <img src={bag} alt="shopping bag" className="h-6 w-6" /> {/* Consistent size */}
            </button>
            <button aria-label="User Account" className="text-gray-700 hover:text-black">
              <img src={user} alt="user" className="h-6 w-6" /> {/* Consistent size */}
            </button>
          </div>

          {/* Hamburger Menu Button (Mobile) */}
          <div className="md:hidden">
            <button
              ref={hamburgerButtonRef} // Add ref
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu" // Link button to the menu it controls
              className="text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 p-1" // Added padding for easier clicking
            >
              {/* Removed mr-4 from icon, handled by parent space-x */}
              {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* --- Mobile Menu (Overlay) --- */}
      <div
        id="mobile-menu" // Add id to be referenced by aria-controls
        ref={mobileMenuRef} // Add ref
        className={`
          md:hidden fixed inset-0 z-40 bg-white transition-transform transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMobileMenuOpen}
        aria-labelledby="mobile-menu-title" // Add label for screen readers
      >
        {/* Add an invisible title for screen readers */}
        <h2 id="mobile-menu-title" className="sr-only">Mobile Navigation Menu</h2>

        {/* Close button inside mobile menu */}
        <div className="flex justify-end p-4">
          <button
            ref={closeButtonRef} // Add ref
            onClick={toggleMobileMenu}
            aria-label="Close mobile menu"
            className="text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 p-1" // Added padding
          >
            <CloseIcon />
          </button>
        </div>

        {/* Mobile Navigation Links */}
        {/* Centering adjusted slightly */}
        <div className="flex flex-col items-center justify-center h-full pt-4 pb-16 px-4 -mt-12">
          <div className="rubik flex flex-col gap-8 text-center text-xl">
            <Link to="/home" className="text-gray-700 hover:text-black" onClick={handleMobileLinkClick}>Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-black" onClick={handleMobileLinkClick}>Shop</Link>
            <Link to="/about" className="text-gray-700 hover:text-black whitespace-nowrap" onClick={handleMobileLinkClick}>About us</Link>
            {/* Mobile Action Icons */}
            <div className="flex gap-8 pt-6"> {/* Increased top padding */}
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

      {/* Background Overlay (Optional but recommended) */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-black/50" // Use rgba notation for opacity
          onClick={toggleMobileMenu}
          aria-hidden="true"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;