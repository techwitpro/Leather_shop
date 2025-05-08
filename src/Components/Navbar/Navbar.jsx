import React, { useState, useEffect, useRef } from 'react';
import { logo, search, bag, user as defaultAvatar, onlineavatar } from '../../assets';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

// Icon Components
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

// Dropdown Menu Component
const UserDropdown = ({ currentUser, userAvatar, handleLogout, showDropdown, setShowDropdown, navigate, dropdownRef }) => (
  <div className="relative" ref={dropdownRef}>
    <button onClick={() => setShowDropdown(prev => !prev)} className="focus:outline-none">
      <img src={userAvatar} alt="User Avatar" className="h-6 w-6 mt-2 rounded-full" />
    </button>

    {showDropdown && (
      <div className="absolute right-0 mt-2 w-32 bg-white border rounded-none shadow z-50">
        {currentUser ? (
          <button
            onClick={handleLogout}
            className="w-full text-center px-4 py-2 text-sm hover:bg-black hover:text-white scale-105 transition-all duration-300 ease-in-out hover:shadow-md"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => {
              setShowDropdown(false);
              navigate("/login");
            }}
            className="w-full text-center px-4 py-2 text-sm hover:bg-black hover:text-white scale-105 transition-all duration-300 ease-in-out hover:shadow-md"
          >
            Login
          </button>
        )}
      </div>
    )}
  </div>
);


// Navbar Component
const Navbar = () => {
  const { cartCount } = useCart();
  const location = useLocation();
  const activeLink = location.pathname;
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [userAvatar, setUserAvatar] = useState(defaultAvatar); // Default avatar
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(); // Declare dropdownRef in Navbar
  const hamburgerButtonRef = useRef(); // Declare hamburgerButtonRef here
  const closeButtonRef = useRef();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Handle User Authentication State Change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setCurrentUser(user);
  
        // Check if user has a valid photoURL
        const hasValidPhoto = user.photoURL && user.photoURL.trim() !== '';
        setUserAvatar(hasValidPhoto ? user.photoURL : onlineavatar);
      } else {
        setCurrentUser(user);
        setUserAvatar(defaultAvatar);
      }
    });
    return () => unsubscribe();
  }, []);
  

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setShowDropdown(false);
      setUserAvatar(defaultAvatar);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Close on outside click for dropdown
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setCurrentUser(user);
        const hasValidPhoto = !!(user.photoURL && user.photoURL.trim() !== '');
        setUserAvatar(hasValidPhoto ? user.photoURL : onlineavatar);
      } else {
        setCurrentUser(null);
        setUserAvatar(defaultAvatar);
      }
    });
  
    return () => unsubscribe();
  }, []);
  

  return (
    <nav className="relative container px-4 nav">
      <div className="flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex-shrink-0 md:hidden">
            <img src={logo} alt="Logo" className="h-7" />
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            {['/home', '/shop', '/about'].map((path) => (
              <Link
                key={path}
                to={path}
                className={`text-lg ${activeLink === path ? 'font-bold text-black' : 'font-medium text-gray-600 hover:text-black'}`}
              >
                {path === '/home' ? 'Home' : path === '/shop' ? 'Shop' : 'About us'}
              </Link>
            ))}
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
          <div className="hidden md:flex items-center space-x-6">
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
            <UserDropdown
              currentUser={currentUser}
              userAvatar={userAvatar}
              handleLogout={handleLogout}
              showDropdown={showDropdown}
              setShowDropdown={setShowDropdown}
              navigate={navigate}
              dropdownRef={dropdownRef} // Pass dropdownRef here
            />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              ref={hamburgerButtonRef}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="text-gray-700 hover:text-black focus:outline-none p-1"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-white transition-transform transform duration-300 ease-in-out"
          role="dialog"
          aria-modal="true"
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="flex justify-end p-4">
            <button
              ref={closeButtonRef}
              onClick={toggleMobileMenu}
              aria-label="Close mobile menu"
              className="text-gray-700 hover:text-black p-1"
            >
              <CloseIcon />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full pt-4 pb-16 px-4 -mt-12">
            <div className="rubik flex flex-col gap-8 text-center text-xl">
              {['/home', '/shop', '/about'].map((path) => (
                <Link
                  key={path}
                  to={path}
                  className="text-gray-700 hover:text-black"
                  onClick={toggleMobileMenu}
                >
                  {path === '/home' ? 'Home' : path === '/shop' ? 'Shop' : 'About us'}
                </Link>
              ))}
              <div className="flex gap-8 pt-6">
                <Link to="/search" onClick={toggleMobileMenu}>
                  <img src={search} alt="search" className="h-6 w-6" />
                </Link>
                <Link to="/cart" onClick={toggleMobileMenu} className="relative">
                  <img src={bag} alt="shopping bag" className="h-6 w-6" />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Link>
                <Link to="/login" onClick={toggleMobileMenu}>
                  <img src={user} alt="user" className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
