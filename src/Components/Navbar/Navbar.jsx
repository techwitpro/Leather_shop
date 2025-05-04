import React, { useState, useEffect, useRef } from 'react';
import { logo, search, bag, user } from '../../assets';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';




const HamburgerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Navbar = () => {
  const { cartCount } = useCart();

  const location = useLocation();
  const activeLink = location.pathname;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const hamburgerButtonRef = useRef(null);
  const closeButtonRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      closeButtonRef.current?.focus();
      document.addEventListener('keydown', handleEscKey);
    } else {
      hamburgerButtonRef.current?.focus();
      document.removeEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="relative container px-4">
      <div className="flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex-shrink-0 md:hidden">
            <img src={logo} alt="Logo" className="h-7" />
          </Link>

          <div className='hidden md:flex items-center space-x-6'>
            <Link to="/home" className={`text-lg ${activeLink === '/home' ? 'font-bold text-black' : 'font-medium text-gray-600 hover:text-black'}`}>Home</Link>
            <Link to="/shop" className={`text-lg ${activeLink === '/shop' ? 'font-bold text-black' : 'font-medium text-gray-600 hover:text-black'}`}>Shop</Link>
            <Link to="/about" className={`text-lg whitespace-nowrap ${activeLink === '/about' ? 'font-bold text-black' : 'font-medium text-gray-600 hover:text-black'}`}>About us</Link>
          </div>
        </div>

        {/* Center Logo */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-7" />
          </Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-6">
          <div className='hidden md:flex items-center space-x-6'>
            <Link to="/search" aria-label="Search" className="text-gray-700 hover:text-black">
              <img src={search} alt="search" className="h-6 w-6" />
            </Link>
            <Link to="/cart" aria-label="Shopping Bag" className="relative text-gray-700 hover:text-black">
              <img src={bag} alt="shopping bag" className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link to="/login" aria-label="User Account" className="text-gray-700 hover:text-black">
              <img src={user} alt="user" className="h-6 w-6" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              ref={hamburgerButtonRef}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 p-1"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`md:hidden fixed inset-0 z-40 bg-white transition-transform transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMobileMenuOpen}
        aria-labelledby="mobile-menu-title"
      >
        <h2 id="mobile-menu-title" className="sr-only">Mobile Navigation Menu</h2>

        <div className="flex justify-end p-4">
          <button
            ref={closeButtonRef}
            onClick={toggleMobileMenu}
            aria-label="Close mobile menu"
            className="text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 p-1"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center h-full pt-4 pb-16 px-4 -mt-12">
          <div className="rubik flex flex-col gap-8 text-center text-xl">
            <Link to="/home" className="text-gray-700 hover:text-black" onClick={handleMobileLinkClick}>Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-black" onClick={handleMobileLinkClick}>Shop</Link>
            <Link to="/about" className="text-gray-700 hover:text-black whitespace-nowrap" onClick={handleMobileLinkClick}>About us</Link>
            <div className="flex gap-8 pt-6">
              <Link to="/search" onClick={handleMobileLinkClick}>
                <img src={search} alt="search" className="h-6 w-6" />
              </Link>
              <Link to="/cart" onClick={handleMobileLinkClick} className="relative">
                <img src={bag} alt="shopping bag" className="h-6 w-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>

              <Link to="/login" onClick={handleMobileLinkClick}>
                <img src={user} alt="user" className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-black/50" onClick={toggleMobileMenu} aria-hidden="true"></div>
      )}
    </nav>
  );
};

export default Navbar;
