import React from 'react';
import { productCategory1, productCategory2, productCategory3 } from '../../assets';

const ProductCategory = () => {
  return (
    <div className="container">
      <h1 className="primary-header mt-28">Product By Category</h1>
      <p className="primary-paragraph">
        Explore our diverse range of dental products
        <br />
        designed for optimal oral health care.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-8">
        {/* 1st Image Card */}
        <div className="w-full h-[569px] bg-gray-200 rounded-none overflow-hidden shadow-lg">
          <div className="relative w-full h-full">
            <img
              src={productCategory1}
              alt="Image 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end items-center h-full">
              <h3 className="card-title">Super Regular Belt</h3>
              <p className="card-paragraph">Looks Better</p>
              <button className="button-secondary">Shop Now</button>
            </div>
          </div>
        </div>


        {/* Second Image Card */}
        <div className="w-full h-[569px] bg-gray-200 rounded-none overflow-hidden shadow-lg">
          <div className="relative w-full h-full">
            <img
              src={productCategory2}
              alt="Image 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end items-center h-full">
              <h3 className="card-title">Bags Collection</h3>
              <p className="card-paragraph">Bags Collection</p>
              <button className="button-secondary">Learn More</button>
            </div>
          </div>
        </div>

        {/* Third Image Card */}
        <div className="w-full h-[569px] bg-gray-200 rounded-none overflow-hidden shadow-lg">
          <div className="relative w-full h-full">
            <img
              src={productCategory3}
              alt="Image 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end items-center h-full">
              <h3 className="card-title">Outfit Shoes</h3>
              <p className="card-paragraph">Style Perfection</p>
              <button className="button-secondary">Shop Now</button>
            </div>
          </div>
        </div>

      </div>
    </div>



  );
};

export default ProductCategory;
