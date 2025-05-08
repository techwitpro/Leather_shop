import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ You need this
import { items } from '../../../data';
import { FiSearch } from 'react-icons/fi';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = items.filter(product =>
    product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 py-3 bg-gray-100 mt-8">
      {/* Search Input */}
      <div className="mb-8 max-w-lg mx-auto relative mt-8">
        {/* Input with Search Icon */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border-2 border-gray-300 rounded-none py-3 pl-12 pr-6 text-lg text-gray-700 focus:ring-2 focus:ring-gray-300 transition duration-200 ease-in-out placeholder:text-gray-400"
        />

        {/* Search Icon */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500 text-xl pointer-events-none">
          <FiSearch />
        </div>
      </div>


      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="bg-white border border-gray-200 rounded-none hover:shadow-sm transition duration-300 ease-in-out transform hover:scale-105 flex flex-col"
            >
              <div className="p-6 flex flex-col flex-grow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-30 object-cover rounded-none mb-4 transition duration-200 ease-in-out hover:opacity-75 mx-auto items-center"
                />
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2 flex-grow">{product.name}</h3>
                <p className="text-lg font-medium text-gray-700 mb-2 text-center">${product.price.toFixed(2)}</p>
                <p className="text-sm text-gray-500 text-center">{product.category}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
