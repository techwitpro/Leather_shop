import React from 'react';
import { motion } from 'framer-motion';
import { shopheroimg } from '../../assets';

const ShopHero = () => {
  return (
    <section className="relative w-full h-[300px] md:h-[448px] bg-black overflow-hidden">
      {/* Background Image */}
      <motion.img
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        src={shopheroimg}
        alt="Shop Hero"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 bg-black z-10"
      ></motion.div>

      {/* Content */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 sm:px-8"
      >
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[80px] leading-tight lg:leading-[1.2] font-normal tracking-wide text-center russo">
          SHOP
        </h1>
        <p className="hero-paragraph text-white mt-4">
          Let's explore our leather products
        </p>
      </motion.div>
    </section>
  );
};

export default ShopHero;
