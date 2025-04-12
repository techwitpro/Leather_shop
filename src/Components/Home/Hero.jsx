import React from 'react';
import { hero } from '../../assets/index.js';

const Hero = () => {
  return (
<section className="relative w-full h-screen bg-black">
      {/* Background Image */}
      <img
        src={hero} // replace with your image or use {hero}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover z-0 overflow-hidden bg-cover bg-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="hero-header">
          BEAUTY LEATHER
        </h1>
        <p className="hero-paragraph text-nowrap">
          Dress with intention, embrace purposeful living. Discover our newest<br /> collections and elevate your style with pieces designed to inspire and <br /> empower you.
        </p>
        <button className="button-primary text-nowrap">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
