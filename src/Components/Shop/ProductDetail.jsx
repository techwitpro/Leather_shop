import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { items } from "../../../data";
import { secure, plane } from "../../assets";
import { useCart } from "../context/CartContext";
import SpecificationTab from "./SpecificationTab";
import SimilarProduct from "./SimillarProduct";
import { motion } from "framer-motion";


const ProductDetail = () => {
  const { addToCart } = useCart();
  const handleAddToCart = () => {
    addToCart(product, quantity);
    alert("Product added to cart");
    console.log(product)
    setQuantity(1);
  }

  const { id } = useParams();
  const product = items.find((item) => item.id === parseInt(id));
  const [hoveredBg, setHoveredBg] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product?.images?.length) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  if (!product) return <div className="text-center mt-10 text-xl">Product not found</div>;

  return (
    <>
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 xl:gap-16">
        {/* Left: Image Gallery */}
        <div className="flex flex-col-reverse md:flex-row gap-2 w-full">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-2 w-full md:w-[120px]">

            {product.images?.slice(0, 3).map((imgObj, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(imgObj)}
                onMouseEnter={() => setHoveredBg(imgObj.bg)}
                onMouseLeave={() => setHoveredBg(null)}
                className={`w-full aspect-[4/5] flex items-center justify-center overflow-hidden rounded-none border-2 cursor-pointer transition-all duration-200 
    ${selectedImage?.src === imgObj.src ? 'border-gray-100' : 'border-gray-200'}`}
                style={{
                  backgroundColor:
                    selectedImage?.src === imgObj.src
                      ? imgObj.bg
                      : hoveredBg === imgObj.bg
                        ? imgObj.bg
                        : '#f3f4f6', // fallback for gray-100
                }}
              >
                <img
                  src={imgObj.src}
                  alt={`${product.name} ${index}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div
            className="p-4 flex items-center justify-center w-full aspect-square overflow-hidden border border-gray-100"
            style={{ backgroundColor: selectedImage?.bg || '#F7F7F7' }}
          >
            {selectedImage && (
              <motion.img
                key={selectedImage.src}
                src={selectedImage.src}
                alt={product.name}
                className="w-full h-full object-contain"
                initial={{ opacity: 0, scale: 0.96, x: -20 }}
                animate={{
                  opacity: [1, 1], // Fade out effect: from visible (1) to invisible (0)
                  scale: [1, 1.01, 1],
                  x: [0, 10, 0],
                  rotate: [0, 0.2, -0.2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                whileHover={{
                  scale: 1.08,
                  rotate: 0,
                  x: 4,
                  transition: { type: "spring", stiffness: 150, damping: 12 }
                }}
              />




            )}
          </div>


        </div>

        {/* Right: Info */}
        <div className="flex flex-col gap-2 md:gap-6">
          <h2 className="card-title md:mt-10">{product.name}</h2>
          <div className="flex items-center gap-4">
            <p className="text-red-600 text-base md:text-[18px] lg:text-[22px]">{product.star}</p>
            <p className="text-base">{product.reviews}</p>
          </div>
          <p className="text-gray-700">{product.productDetails}</p>
          <div className="flex items-center gap-4">
            <p className="text-2xl lg:text-3xl font-bold text-black">${product.price}</p>
            <p className="text-lg text-gray-400 line-through">{product.discountPrice}</p>
          </div>

          {/* availaability */}
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex gap-4">
              <p className="text-base text-gray-700">Availability:</p>
              <p className="text-base text-green-600">{product.availability}</p>
            </div>

            <div className="flex gap-4">
              <p className="text-center">Color:</p>
              <div className="text-center items-center">
                <div className="flex gap-4 items-center justify-center">
                  <button className="w-4 h-4 bg-yellow-500 hover:bg-yellow-600  border-3 border-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  ></button>

                  <button className="w-4 h-4 bg-yellow-500 hover:bg-yellow-600 border-3 border-yellow-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300"></button>

                  <button className="w-4 h-4 bg-yellow-500 hover:bg-yellow-600 border-3 border-yellow-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300"></button>
                </div>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <p>Size:</p>
              <p className=" text-sm text-center ">38 40 42 44 46</p>

            </div>

          </div>


          {/* Quantity */}
          <div className="flex items-center gap-6 mt-4">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-10 h-10 border border-black text-xl hover:bg-black hover:text-white rounded-md"
            >
              -
            </button>
            <span className="text-xl">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-10 h-10 border border-black text-xl hover:bg-black hover:text-white text-center rounded-md"
            >
              +
            </button>
            {/* Add to Cart */}
            <button
              className=" bg-black text-white py-3 px-6 text-lg font-semibold hover:bg-gray-800 transition justify-center flex items-center gap-2 w-60 h-10"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>

          <div className="flex gap-6 items-center mt-4">
            <div className="flex gap-4">
              <img src={plane} alt="Plane Icon" className="bg-black w-[60px] h-[59px]" />
              <p className="text-black text-start text-base">World wide<br />
                Free Shipping</p>
            </div>
            <div className="flex gap-4">
              <img src={secure} alt="secure" className="bg-black w-[60px] h-[59px]" />
              <p className="text-black text-start text-base">100% Safe & <br />
                Secure Checkout</p>
            </div>
          </div>
        </div>

      </div>

      {/* Tabs */}
      <SpecificationTab />
      <SimilarProduct />



    </>

  );
};

export default ProductDetail;
