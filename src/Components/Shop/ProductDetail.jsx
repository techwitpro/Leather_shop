import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { items } from "./ShopTabWithSearch";

const ProductDetail = () => {
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
    <div className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left: Image Gallery */}
      <div className="flex flex-col md:flex-row gap-2 w-full">
        {/* Thumbnails */}
        <div className="flex md:flex-col gap-2 w-full md:w-[120px]">
          {product.images?.slice(0, 3).map((imgObj, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(imgObj)}
              onMouseEnter={() => setHoveredBg(imgObj.bg)}
              onMouseLeave={() => setHoveredBg(null)}
              className={`w-full aspect-[4/5] flex items-center justify-center overflow-hidden rounded-none border-2 cursor-pointer transition-all duration-200 
    ${selectedImage?.src === imgObj.src ? 'border-none' : 'border-gray-300'}`}
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
          className="p-4 flex items-center justify-center w-full aspect-square overflow-hidden"
          style={{ backgroundColor: selectedImage?.bg || '#F7F7F7' }}
        >
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={product.name}
              className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-110"
            />
          )}
        </div>


      </div>

      {/* Right: Info */}
      <div className="flex flex-col gap-6">
        <h2 className="text-3xl font-semibold text-gray-900">{product.name}</h2>
        <p className="text-gray-700">{product.text}</p>
        <p className="text-2xl font-bold text-black">{product.price}</p>

        {/* Quantity */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-10 h-10 border border-black text-xl hover:bg-black hover:text-white"
          >
            -
          </button>
          <span className="text-xl">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => q + 1)}
            className="w-10 h-10 border border-black text-xl hover:bg-black hover:text-white"
          >
            +
          </button>
        </div>

        {/* Add to Cart */}
        <button className="mt-4 bg-black text-white py-3 px-6 text-lg font-semibold hover:bg-gray-800 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
