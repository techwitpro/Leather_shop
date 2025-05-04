import React, { useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { items } from "../../../data";
import { motion } from "framer-motion";

// Get unique categories
const categories = ["All Items", ...new Set(items.map((item) => item.category))];

const ShopTabsWithSearch = () => {
  const [visibleCount, setVisibleCount] = useState(9);
  const [activeCategory, setActiveCategory] = useState("All Items");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter((item) => {
    const matchCategory =
      activeCategory === "All Items" || item.category === activeCategory;
      const trimmedSearch = searchTerm.trim().toLowerCase();
      const matchSearch =
      item.name.toLowerCase().includes(trimmedSearch) ||
      item.category.toLowerCase().includes(trimmedSearch);

    return matchCategory && matchSearch;
  });

  return (
    <div className="mx-auto container px-4 py-10">
      {/* Tabs + Search */}
      <div className="flex flex-col md:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setVisibleCount(6);
              }}
              className={`border border-black px-4 py-2 md:w-[140px] md:h-[45px] transition-colors duration-200 text-base font-medium poppins
                ${activeCategory === category
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-black hover:text-white"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="w-full sm:w-auto">
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setVisibleCount(6);
              }}
              className="w-full px-4 py-2 pr-10 border border-black rounded-none text-black placeholder-gray-500 focus:ring-1 focus:ring-black focus:outline-none md:w-full md:h-[45px] text-base archivo"
            />

            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black w-5 h-5 pointer-events-none mr-2" />
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {filteredItems.length > 0 ? (
          filteredItems.slice(0, visibleCount).map((item) => (
            <Link to={`/product/${item.id}`} key={item.id}>
              <motion.div
                className="bg-white rounded-none overflow-hidden shadow-none hover:shadow-sm transition cursor-pointer"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="w-full h-[400px] md:h-[320px] lg:h-[509px] bg-gray-100 flex items-center justify-center relative"
                  whileHover={{ rotate: [0, 1, -1, 1, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="max-w-[509px] w-full h-[200px] sm:h-[180px] lg:h-[220px] object-contain"
                    animate={{
                      y: [0, -8, 0],
                      scale: [1, 1.055, 1],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.05 }}
                  />
                </motion.div>

                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 card-title mt-2">
                      {item.name}
                    </h3>
                    <p className="text-black font-semibold text-base ">
                      ${item.price}
                    </p>
                  </div>
                  <p className="text-black text-base">{item.text}</p>
                </div>
              </motion.div>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 archivo text-base">
            No items found.
          </p>
        )}
      </motion.div>

      {/* Show More Button */}
      {visibleCount < filteredItems.length && (
        <div className="flex justify-center mt-8">
          <motion.button
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="border border-black px-6 py-2 w-[180px] h-[50px] md:w-[200px] md:h-[60px] transition-colors duration-200 text-base font-medium poppins hover:bg-black hover:text-white bg-white text-black focus:bg-black focus:text-white focus:ring-2 focus:ring-offset-1 focus:ring-black focus:outline-none hover:shadow-sm"
            whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: 'easeOut' } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.15, ease: 'easeInOut' } }}
          >
            Show More
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default ShopTabsWithSearch;
