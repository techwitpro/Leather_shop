import React from 'react';
import { motion } from 'framer-motion';
import { logo2 } from '../../assets';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-0 px-4 md:px-8">
      {/* Section Title */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[80px] leading-tight lg:leading-[1.2] font-normal tracking-wide russo mt-20 mb-20">
          Let❜s Connect With Us
        </h1>
      </motion.div>

      {/* Footer Content */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto px-0 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        {/* Logo & Description */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-center items-start"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <img src={logo2} alt="logo2" className="h-8 lg:h-10" />
            <h4 className="text-white text-[26px] lg:text-[35px] font-sans">Leather</h4>
          </div>
          <p className="text-[14px] md:text-[16px] lg:text-[18px] text-white text-start">
            Discover our leather website,<br />
            offering premium, handcrafted <br />
            leather products
          </p>
        </motion.div>

        {/* Navigation Links - Company */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-center items-start"
        >
          <h3 className="text-lg font-semibold text-white mb-3">Company</h3>
          <ul className="space-y-2 text-[14px] md:text-[16px] text-white">
            <li><a href="/home" className="hover:text-gray-300 hover:underline transition-colors duration-200">About</a></li>
            <li><a href="/shop" className="hover:text-gray-300 hover:underline transition-colors duration-200">Product</a></li>
            <li><a href="/about" className="hover:text-gray-300 hover:underline transition-colors duration-200">Order</a></li>
          </ul>
        </motion.div>

        {/* Navigation Links - Help */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-center items-start"
        >
          <h3 className="text-lg font-semibold text-white mb-3">Help</h3>
          <ul className="space-y-2 text-[14px] md:text-[16px] text-white">
            <li><a href="/home" className="hover:text-gray-300 hover:underline transition-colors duration-200">Contact Us</a></li>
            <li><a href="/shop" className="hover:text-gray-300 hover:underline transition-colors duration-200">Map</a></li>
            <li><a href="/about" className="hover:text-gray-300 hover:underline transition-colors duration-200">Terms & Condition</a></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-center items-start mb-3"
        >
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="text-sm text-[14px] md:text-[16px] text-white">
            256B, West Site House <br />
            Main Town, New York
          </p>
          <p className="text-[14px] md:text-[16px] mt-2 text-white">
            +98745 612 301 <br />
            +95874 102 201
          </p>
        </motion.div>
      </motion.div>

      {/* Divider */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="w-full h-[1px] bg-white mt-10 mb-10"
      ></motion.div>

      {/* Footer Bottom */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 px-0 md:px-6"
      >
        {/* Copyright */}
        <div className="text-center text-[14px] md:text-[16px] text-white">
          &copy; {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>

        {/* Socials and Privacy */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-between gap-6 text-center md:text-left"
        >
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
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
