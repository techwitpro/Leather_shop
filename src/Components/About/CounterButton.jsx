import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { aboutTwo } from "../../assets";

// Counter Component
const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 10);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 10);

    return () => clearInterval(timer);
  }, [end, duration]);

  const formatNumber = (num) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return Math.floor(num);
  };

  return <span>{formatNumber(count)}</span>;
};

// Main CounterButton Component
const CounterButton = () => {
  return (
    <div className="container flex flex-col-reverse lg:flex-row justify-between items-center lg:gap-12 py-6 lg:mt-8">

      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col justify-start lg:justify-center lg:h-[700px]">
        <h2 className="leading-tight text-[23px] sm:text-[25px] md:text-[30px] lg:text-[42px] font-normal tracking-normal russo text-start mt-6 text-black">
          Our Impact
        </h2>
        <p className="text-base mt-2 lg:w-96 text-gray-700">
          A leather-focused website can significantly impact e-commerce by offering a specialized platform for high-quality leather goods. It attracts a niche audience seeking premium products, enhances brand identity, and increases customer trust. With detailed product descriptions, professional images, and seamless navigation, such a site can boost sales, foster customer loyalty, and differentiate the brand in a competitive online market.
        </p>

        {/* Stats Counters */}
        <div className="flex flex-col md:flex-row justify-start gap-6 lg:gap-12 p-0 mt-0">
          {[
            { end: 50000, label: "Total Sales", color: "text-black", duration: 2000 },
            { end: 1000000, label: "Overall Customers", color: "text-black", duration: 2500 },
            { end: 20, label: "Countries", color: "text-black", duration: 1500 },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <h2 className={`leading-tight text-[20px] sm:text-[25px] md:text-[28px] lg:text-[30px] font-normal tracking-normal russo text-center mt-10 ${item.color}`}>
                <Counter end={item.end} duration={item.duration} />+
              </h2>
              <p className="text-lg font-medium text-gray-700 text-center mt-0">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Section (Image) */}
      <motion.div
        className="w-full lg:w-1/2 h-[400px] md:h-[706px] flex items-center justify-center mb-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img
          src={aboutTwo}
          alt="About Us Impact Image"
          className="object-cover w-full h-full shadow-sm"
        />
      </motion.div>

    </div>
  );
};

export default CounterButton;
