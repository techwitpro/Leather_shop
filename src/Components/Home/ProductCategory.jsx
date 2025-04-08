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
        {/* First Image Card */}
        <div className="w-full h-[569px] bg-gray-200 rounded-none overflow-hidden shadow-lg">
          <img
            src={productCategory1}
            alt="Image 1"
            className="w-full h-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Card Title 1</h3>
            <p className="text-gray-600">Description or content goes here.</p>
          </div>
        </div>

        {/* Second Image Card */}
        <div className="w-full h-[569px] bg-gray-200 rounded-none overflow-hidden shadow-none">
          <img
            src={productCategory2}
            alt="Image 2"
            className="w-full h-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Card Title 2</h3>
            <p className="text-gray-600">Description or content goes here.</p>
          </div>
        </div>

        {/* Third Image Card */}
        <div className="w-full h-[569px] bg-gray-200 rounded-none overflow-hidden shadow-lg">
          <img
            src={productCategory3}
            alt="Image 3"
            className="w-full h-full object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">Card Title 3</h3>
            <p className="text-gray-600">Description or content goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;
