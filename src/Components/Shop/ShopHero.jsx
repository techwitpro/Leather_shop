import React from 'react'
import { shopheroimg } from '../../assets'; // Make sure this path is correct

const ShopHero = () => {
  return (
    <section
      className="relative flex items-center justify-center w-ful h-[300px] md:h-[448px] bg-cover bg-center text-white text-center px-6 sm:px-8"
      style={{
        backgroundImage: `url(${shopheroimg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 sm:bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-lg sm:max-w-2xl">
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[80px] leading-tight lg:leading-[1.2] font-normal tracking-wide text-center russo">
          SHOP
        </h1>
        <p className="hero-paragraph">
          Lets explore our leather products<br />
        </p>
      </div>
    </section>
  )
}

export default ShopHero;
