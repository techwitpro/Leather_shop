import React from 'react';
import { logo2 } from '../../assets';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-0 px-4 md:px-8">
      <div>
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[80px] leading-tight lg:leading-[1.2] font-normal tracking-wide text-start md:text-center russo mt-20 mb-20">Let❜s Connect With Us</h1>
      </div>
      <div className="mx-auto px-0 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div className="flex flex-col justify-center items-start">
          <div className="flex items-center justify-center gap-3 mb-3">
            <img src={logo2} alt="logo2" className="h-8 lg:h-10" />
            <h4 className="text-white text-[26px] lg:text-[35px] font-sans">Leather</h4>
          </div>
          <p className="text-[14px] md:text-[16px] lg:text-[18px] text-white text-start">
            Discover our leather website,<br />
            offering premium, handcrafted <br />
            leather products
          </p>
        </div>

        {/* Navigation Links - Company */}
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-lg font-semibold text-white mb-3 ">Company</h3>
          <ul className="space-y-2 text-[14px] md:text-[16px] text-white">
            <li><a href="/home" className="hover:text-gray-300 hover:underline transition-colors duration-200">About</a></li>
            <li><a href="/shop" className="hover:text-gray-300 hover:underline transition-colors duration-200">Product</a></li>
            <li><a href="/about" className="hover:text-gray-300 hover:underline transition-colors duration-200">Order</a></li>
          </ul>
        </div>

        {/* Navigation Links - Help */}
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-lg font-semibold text-white mb-3">Help</h3>
          <ul className="space-y-2 text-[14px] md:text[16px] text-white">
            <li><a href="/home" className="hover:text-gray-300 hover:underline transition-colors duration-200">Contact Us</a></li>
            <li><a href="/shop" className="hover:text-gray-300 hover:underline transition-colors duration-200">Map</a></li>
            <li><a href="/about" className="hover:text-gray-300 hover:underline transition-colors duration-200">Terms & Condition</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col justify-center items-start mb-3">
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-sm text-[14px] md:text-[16px] text-white"> 
            256B, West Site House <br />
            Main Town, New York
          </p>
          <p className="text-[14px] md:text-[16px] mt-2 text-white">
            +98745 612 301 <br />
            +95874 102 201
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-white mt-10 mb-10 "></div>

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 px-0 md:px-6">
        {/* Copyright */}
        <div className="text-center text-[14px] md:text-[16px] text-white">
          &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>

        {/* Socials and Privacy */}
        <div className="flex items-center justify-between gap-6 text-center md:text-left">
          <div className="flex justify-center md:justify-start gap-6 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-blue-500 transition-colors duration-200 w-[16px] h-[16px] md:w-full md:h-full" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500 transition-colors duration-200 w-[16px] h-[16px] md:w-full md:h-full" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-300 transition-colors duration-200 w-[16px] h-[16px] md:w-full md:h-full" />
            </a>
          </div>

          <span className="text-white">|</span>

          <a
            href="/privacy-policy"
            className="text-[14px] md:text-[16px] hover:underline transition-colors duration-200"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
