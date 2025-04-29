import React from 'react';
import { motion } from 'framer-motion';
import { hero } from '../../assets/index.js';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Hero = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[800px] bg-black overflow-hidden">
      {/* Background Image */}
      <motion.img
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
        src={hero}
        alt="Hero"
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
        className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4"
      >
        <h1 className="hero-header">BEAUTY LEATHER</h1>
        <p className="hero-paragraph text-nowrap mt-4">
          Dress with intention, embrace purposeful living. Discover our newest<br />
          collections and elevate your style with pieces designed to inspire and <br />
          empower you.
        </p>
        <Link to="/shop">
          <motion.button
            whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: 'easeOut' } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.15, ease: 'easeInOut' } }}
            className="button-primary text-nowrap mt-6"
          >
            Shop Now
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
