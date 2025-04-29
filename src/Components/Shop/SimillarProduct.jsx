import React from 'react';
import { monk, brogue, oxford, derby } from '../../assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const SimilarProduct = () => {
  const products = [
    { id: 1, title: 'Classic Oxford', price: '$99.99', image: monk },
    { id: 2, title: 'Wingtip Brogue', price: '$149.99', image: brogue },
    { id: 3, title: 'Derby Lace-Up', price: '$199.99', image: oxford },
    { id: 4, title: 'Monk Strap', price: '$299.99', image: derby }
  ];

  return (
    <div className="mx-auto">
      <h1 className="leading-[100%] text-black text-[30px] sm:text-[32px] md:text-[48px] lg:text-[80px] font-normal tracking-normal russo text-start container mt-20 mb-20">Similar Products</h1>
      <Link to="/shop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-2 md:px-0 mb-20 md:mb-28">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-gray-100 rounded-none shadow-sm overflow-hidden"
              initial={{ opacity: 0, x: -50 }} // Start off-screen to the left
              animate={{ opacity: 1, x: 0 }} // Slide to normal position
              transition={{ duration: 0.8, delay: index * 0.2 }} // Delay each product slightly
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-50% h-[150px] object-cover mx-auto mt-10 transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div className="p-6">
                <h2 className="card-title text-center text-black">{product.title}</h2>
                <button className="button-accent">Add to Cart</button>
              </div>
            </motion.div>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default SimilarProduct;
