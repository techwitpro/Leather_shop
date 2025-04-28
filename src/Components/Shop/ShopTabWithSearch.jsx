import React, { useState } from "react";
import { captoe, chukkaboot, splittoe, tasselloafer, wholecut, doublemonk, belt} from "../../assets";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";


// Sample data with image URLs
export const items = [
  {
    id: 1,
    name: "Cap-Toe Oxford",
    price: 53.00,
    discountPrice: "$60.00",
    category: "Shoes",
    images: [
      { src: captoe, bg: '#f3f4f6' },
      { src: captoe, bg: '#FFFCF1' },
      { src: captoe, bg: '#000000' },
    ],
    image: captoe,
    text: "Give your feet the beauty treatment that only brand new shoes can give",
    productDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    star: "★★★★☆",
    reviews: "6 customer review",
    availability: "In Stock",
  },
  {
    id: 2,
    name: "Split Toe Derby",
    price: 32.00,
    discountPrice: "$40.00",
    category: "Shoes",
    images: [
      { src: splittoe, bg: '#f3f4f6' },
      { src: splittoe, bg: '#FFFCF1' },
      { src: splittoe, bg: '#000000' },
    ],
    image: splittoe,
    text: "Give your feet the beauty treatment that only brand new shoes can give",
    productDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    star: "★★★★★",
    reviews: "8 customer review",
    availability: "In Stock",
  },
  {
    id: 3,
    name: "Chukka Boot",
    price: 25.00,
    discountPrice: "$30.00",
    category: "Belts",
    images: [
      { src: chukkaboot, bg: '#f3f4f6' },
      { src: chukkaboot, bg: '#FFFCF1' },
      { src: chukkaboot, bg: '#000000' },
    ],
    image: chukkaboot,
    text: "Give your feet the beauty treatment that only brand new shoes can give",
    productDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    star: "★★★★★",
    reviews: "10 customer review",
    availability: "In Stock",
  },
  {
    id: 4,
    name: "Tassel Loafer",
    discountPrice: "$70.00",
    price: 65.00,
    category: "Bags",
    images: [
      { src: tasselloafer, bg: '#f3f4f6' },
      { src: tasselloafer, bg: '#FFFCF1' },
      { src: tasselloafer, bg: '#000000' },
    ],
    image: tasselloafer,
    text: "Give your feet the beauty treatment that only brand new shoes can give",
    productDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    star: "★★★★",
    reviews: "4 customer review",
    availability: "Out Of Stock",
  },
  {
    id: 5,
    name: "Wholecut Oxford",
    discountPrice: "$35.00",
    price: 30.00,
    category: "Bags",
    images: [
      { src: wholecut, bg: '#f3f4f6' },
      { src: wholecut, bg: '#FFFCF1' },
      { src: wholecut, bg: '#000000' },
    ],
    image: wholecut,
    text: "Give your feet the beauty treatment that only brand new shoes can give",
    productDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    star: "★★★★☆",
    reviews: "5 customer review", 
    availability: "In Stock",
  },
  {
    id: 6,
    name: "Double Monk",
    discountPrice: "$20.00",
    price: 18.00,
    category: "Belts",
    images: [
      { src: doublemonk, bg: '#f3f4f6' },
      { src: doublemonk, bg: '#FFFCF1' },
      { src: doublemonk, bg: '#000000' },
    ],
    image: doublemonk,
    text: "Give your feet the beauty treatment that only brand new shoes can give",
    productDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    star: "★★★★★",
    reviews: "12 customer review",
    availability: "In Stock",
  },
  {
    id: 7,
    name: "Chealsea Boot",
    discountPrice: "$50.00",
    price: 45.00,
    category: "Shoes",
    images: [
      { src: captoe, bg: '#f3f4f6' },
      { src: captoe, bg: '#FFFCF1' },
      { src: captoe, bg: '#000000' },
    ],
    image: captoe,
    text: "Give your feet the beauty treatment that only brand new shoes can give",
    productDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    star: "★★★★★",
    reviews: "6 customer review",
    availability: "In Stock",
  },
  {
    id: 8,
    name: "Brogue Derby",
    price: 55.00,
    discountPrice: "$60.00",
    category: "Shoes",
    images: [
      { src: chukkaboot, bg: '#f3f4f6' },
      { src: chukkaboot, bg: '#FFFCF1' },
      { src: chukkaboot, bg: '#000000' },
    ],
    image: chukkaboot,
    text: "Give your feet the beauty treatment that only brand new shoes can give",
    productDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    star: "★★★★★",
    reviews: "10 customer review",
    availability: "In Stock",
  },
  {
    id: 9,
    name: "Plain-Toe Blucher",
    discountPrice: "$80.00",
    price: 70.00,
    category: "Shoes",
    images: [
      { src: wholecut, bg: '#f3f4f6' },
      { src: wholecut, bg: '#FFFCF1' },
      { src: wholecut, bg: '#000000' },
      
    ],
    image: wholecut,
    text: "Give your feet the beauty treatment that only brand new shoes can give",
    productDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    star: "★★★★",
    reviews: "7 customer review",
    availability: "In Stock",
  },
  {
    id: 10,
    name: "Hand Bag",
    discountPrice: "$100.00",
    price: 90.00,
    category: "Bags",
    images: [
      { src:  "https://img.freepik.com/premium-photo/gray-leather-casual-sling-bag-isolated-white-background_125604-50.jpg", bg: '#f3f4f6'},
      { src:  "https://img.freepik.com/premium-photo/gray-leather-casual-sling-bag-isolated-white-background_125604-50.jpg", bg: '#FFFCF1' },
      { src:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNsCBW4QmNdnwSnulilCh0XMdF5oKQfhkaAu3UvndsOUJfCXyZdnr7UFTQz_UWklowx7g&usqp=CAU", bg: '#000000' },
    ],
    image: "https://image.similarpng.com/file/similarpng/very-thumbnail/2020/10/Ladys-bag-isolated-on-transparent-background-PNG-1.png",
    text: "The perfect accessory to complete your outfit",
    productDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    star: "★★★★★",
    reviews: "8 customer review",
    availability: "Out Of Stock",
  },
  {
    id: 11,
    name: "Belt",
    price: 50.00,
    discountPrice: "$60.00",
    category: "Belts",
    images: [
      { src: belt, bg: '#f3f4f6' },
      { src: belt, bg: '#FFFCF1' },
      { src: belt, bg: '#000000' },
    ],
    image: belt,
    text: "The perfect accessory to complete your outfit",
    productDetails: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    star: "★★★★☆",
    reviews: "9 customer review",
    availability: "In Stock",
    
  },

];

// Get unique categories
const categories = ["All Items", ...new Set(items.map((item) => item.category))];

const ShopTabsWithSearch = () => {
  const [visibleCount, setVisibleCount] = useState(9); // ✅ Correct position
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
      <div className="flex flex-col md:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        {/* Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category)
                setVisibleCount(6)
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
                setSearchTerm(e.target.value)
                setVisibleCount(6);

              }}
              className="w-full px-4 py-2 pr-10 border border-black rounded-none
                 text-black placeholder-black focus:ring-1 focus:ring-black focus:outline-none
                 md:w-full md:h-[45px] text-base archivo"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black w-5 h-5 pointer-events-none mr-2" />
          </div>
        </div>


      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.slice(0, visibleCount).map((item) => (

            <Link to={`/product/${item.id}`} key={item.id}>
              <div className="bg-white rounded-sm overflow-hidden transition cursor-pointer hover:shadow-lg">
                <div className="w-full h-[400px] md:h-[320px] lg:h-[509px] bg-gray-100 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-w-[509px] w-full h-[200px] sm:h-[180px] lg:h-[220px] object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 card-title mt-2">
                      {item.name}
                    </h3>
                    <p className="text-black font-semibold text-base ">${item.price}</p>
                  </div>
                  <p className="text-black text-base">{item.text}</p>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 archivo text-base">No items found.</p>
        )}
      </div>

      {visibleCount < filteredItems.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)} // show 3 more per click
            className="border border-black px-4 p-2 w-[180px] h-[50px] md:w-[200px] md:h-[60px] transition-colors duration-200 text-base font-medium poppins hover:bg-black hover:text-white  bg-white text-black  focus:bg-black focus:text-white focus:ring-2 focus:ring-offset-1 focus:ring-black focus:outline-none"
          >
            Show More
          </button>
        </div>
      )}






    </div>
  );
};

export default ShopTabsWithSearch;
