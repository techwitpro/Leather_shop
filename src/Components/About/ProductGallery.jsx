import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Dummy images (replace with your real images)
import { belt, tasselloafer, aboutBag, aboutMoneybag } from "../../assets";

const products = {
  "Regular Shoes": tasselloafer,
  "LEATHER BELT": belt,
  "Modern Wallet": aboutMoneybag,
  "Outfit Bags": aboutBag,
};

const ProductGallery = () => {
  const [activeTab, setActiveTab] = useState("LEATHER BELT");

  return (
    <div className="container flex flex-col md:flex-row-reverse items-start justify-around py-12 px-4 gap-0">
      
      {/* Left Side: Header List */}
      <div className="flex flex-col items-start gap-6">
        {Object.keys(products).map((item) => (
          <motion.button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`lg:leading-tight text-[28px] sm:text-[32px] md:text-[36px] lg:text-[46px] font-normal tracking-normal russo text-start ${
              activeTab === item ? "text-black scale-100 ml-8" : "text-white shadow-transparent text-stroke text-stroke-black hover:text-black"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {item}
          </motion.button>
        ))}
      </div>

      {/* Right Side: Product Image */}
      <div className="w-full h-[300px] md:w-[400px] md:h-[400px] relative items-start justify-start">
        <h2 className="text-gray-300 font-medium text-lg tracking-wide flex justify-center text-center mt-10 lg:mt-5 poppins">
          PRODUCTS
        </h2>
        
        <AnimatePresence mode="wait">
          <motion.img
            key={activeTab}
            src={products[activeTab]}
            alt={activeTab}
            className="object-contain w-full h-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

    </div>
  );
};

export default ProductGallery;
