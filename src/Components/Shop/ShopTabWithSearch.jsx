import React, { useState } from "react";
import { captoe, chukkaboot, splittoe, tasselloafer, wholecut, doublemonk, } from "../../assets";
import { Search } from "lucide-react";

// Sample data with image URLs
const items = [
  {
    id: 1,
    name: "Cap-Toe Oxford",
    price: "$53.00",
    category: "Shoes",
    image: captoe,
    text: "Give your feet the beauty treatment that only brand new shoes can give",
  },
  {
    id: 2,
    name: "Split Toe Derby",
    price: "$32.00",
    category: "Shoes",
    image: splittoe,
    text: "Elegant and comfortable loafers for any occasion",
  },
  {
    id: 3,
    name: "Chukka Boot",
    price: "$25.00",
    category: "Belts",
    image: chukkaboot,
    text: "Stylish chukka boots for a casual look",
  },
  {
    id: 4,
    name: "Tassel Loafer",
    price: "$65.00",
    category: "Bags",
    image: tasselloafer,
    text: "Classic tassel loafers for a sophisticated style",
  },
  {
    id: 5,
    name: "Wholecut Oxford",
    price: "$30.00",
    category: "Bags",
    image: wholecut,
    text: "Spacious and durable bags for daily use",
  },
  {
    id: 6,
    name: "Double Monk",
    price: "$18.00",
    category: "Belts",
    image: doublemonk,
    text: "Stylish double monk shoes for a modern look",
  },
  {
    id: 7,
    name: "Chealsea Boot",
    price: "$45.00",
    category: "Shoes",
    image: captoe,
    text: "Stylish brogue shoes for a classic look",
  },
  {
    id: 8,
    name: "Brogue Derby",
    price: "$55.00",
    category: "Shoes",
    image: chukkaboot,
    text: "Comfortable derby shoes for everyday wear",
  },
  {
    id: 9,
    name: "Plain-Toe Blucher",
    price: "$70.00",
    category: "Shoes",
    image: wholecut,
    text: "Elegant chelsea boots for a polished appearance",
  },

];

// Get unique categories
const categories = ["All Items", ...new Set(items.map((item) => item.category))];

const ShopTabsWithSearch = () => {
  const [activeCategory, setActiveCategory] = useState("All Items");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = items.filter((item) => {
    const matchCategory =
      activeCategory === "All Items" || item.category === activeCategory;
    const matchSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="mx-auto container px-4 py-10">
      {/* Tabs + Search */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`border border-black px-4 py-2 md:w-[150px] md:h-[50px] transition-colors duration-200 text-base font-medium poppins
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
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pr-10 border border-black rounded-none
                 text-black placeholder-black focus:ring-1 focus:ring-black focus:outline-none
                 md:w-full md:h-[50px] text-base poppins"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black w-5 h-5 pointer-events-none" />
          </div>
        </div>


      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-sm overflow-hidden transition border"
            >
              {/* Fixed-height container */}
              <div className="w-full h-[400px] md:h-[632px] bg-gray-100 flex items-center justify-center">
                {/* Centered and smaller image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-w-[509px] w-full h-auto object-contain"
                />
              </div>
              <div className="p-4 space-y-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800 flex justify-between items-center card-title">
                    {item.name}
                  </h3>
                  <p className="text-black font-semibold">{item.price}</p>
                </div>
                <p className="text-black">{item.text}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No items found.</p>
        )}
      </div>





    </div>
  );
};

export default ShopTabsWithSearch;
