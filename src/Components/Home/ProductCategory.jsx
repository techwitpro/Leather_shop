import React from 'react';
import { productCategory1, productCategory2, productCategory3 } from '../../assets';

const ProductCategory = () => {
  return (
    <div className='mx-auto'>
      <h1 className="primary-header mt-20">Product By Category</h1>
      <p className="primary-paragraph">
        Discover our exclusive collection of products, meticulously crafted to <br />
        enhance your style and elevate your everyday experience.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-2 mt-8 overflow-hidden px-2 md:px-0 ">
        {/* Card Component Example */}
        <div className="w-full h-[400px] lg:w-full lg:h-[752px] bg-gray-200 rounded-none overflow-hidden">
          <div className="relative w-full h-full">
            <img
              src={productCategory1}
              alt="Image 1"
              className="w-full h-full object-cover "
            />
            <div className="absolute bottom-0 right-0 w-full bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end h-full">
              <div className="items-center text-center ">
                <h3 className="card-title text-white">Super Regular Belt</h3>
                <p className="card-paragraph">Looks Better</p>
                <button className="button-secondary">Shop Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Card Component Example */}
        <div className="w-full h-[400px] lg:w-full lg:h-[752px] bg-gray-200 rounded-none overflow-hidden">
          <div className="relative w-full h-full">
            <img
              src={productCategory2}
              alt="Image 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 right-0 w-full bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end h-full">
              <div className="items-center text-center">
                <h3 className="card-title text-white">Bags Collections</h3>
                <p className="card-paragraph">Style Perfections</p>
                <button className="button-secondary">Shop Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Card Component Example */}
        <div className="w-full h-[400px] lg:w-full lg:h-[752px] bg-gray-200 rounded-none overflow-hidden">
          <div className="relative w-full h-full">
            <img
              src={productCategory3}
              alt="Image 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 right-0 w-full bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end h-full">
              <div className="items-center text-center">
                <h3 className="card-title text-white">Outfit Shoes</h3>
                <p className="card-paragraph">Style Yourself</p>
                <button className="button-secondary">Shop Now</button>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>



  );
};

export default ProductCategory;
