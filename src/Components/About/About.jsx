import React from "react";
import { motion } from "framer-motion";
import { aboutFirst } from "../../assets";
import CounterButton from "./CounterButton";
import ProductGallery from "./ProductGallery";
import Banner from "./Banner";

const About = () => {
  return (
    <>
      <div className="container flex flex-col lg:flex-row justify-between items-center lg:gap-12 py-2">
        {/* Left Image */}
        <motion.div
          className="w-full lg:w-1/2 h-[400px] md:h-[706px] flex items-center justify-center mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={aboutFirst}
            alt="Leather Goods Showcase Image"
            className="object-cover w-full h-full shadow-sm"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-start lg:justify-center h-auto lg:h-[700px]"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="leading-tight text-black text-[23px] sm:text-[25px] md:text-[30px] lg:text-[42px] font-normal tracking-normal russo text-start mb-4 mt-6">
            Welcome to our leather <br /> goods website, where craftsmanship meets luxury
          </h2>
          <p className="text-base text-gray-700">
            Welcome to our leather goods website, where craftsmanship meets luxury. We specialize in premium leather products, offering a curated selection of shoes, bags, belts, and accessories designed for style and durability. Our collection is crafted with the finest materials, ensuring quality and timeless appeal. Explore our range to find the perfect piece that complements your sophisticated taste.
          </p>
        </motion.div>
      </div>

      {/* Counters Section */}
      <CounterButton className="mt-0"/>
      <ProductGallery />
      <Banner />
    </>
  );
};

export default About;
