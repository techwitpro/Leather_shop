import React from 'react';
import { monk, brogue, oxford, derby } from '../../assets';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CardSlider = () => {
  const products = [
    { id: 1, title: 'Classic Oxford', price: '$99.99', image: monk },
    { id: 2, title: 'Wingtip Brogue', price: '$149.99', image: brogue },
    { id: 3, title: 'Derby Lace-Up', price: '$199.99', image: oxford },
    { id: 4, title: 'Monk Strap', price: '$299.99', image: derby }
  ];

  return (
    <div className="mx-auto">
      {/* Animated Title */}
      <motion.h1
        className="primary-header mt-20"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Top Products
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        className="primary-paragraph"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Discover our top products quality, <br />
        innovation, and customer satisfaction.
      </motion.p>
      <Link to="/shop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-2 md:px-0">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-gray-100 rounded-none shadow-sm overflow-hidden"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-50% h-[150px] object-cover mx-auto mt-10 transition-transform duration-300 ease-in-out hover:scale-110"
              />
              <div className="p-6">
                <h2 className="card-title text-center text-black">{product.title}</h2>
                <motion.button
                  className="button-accent"
                  whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: 'easeOut' } }}
                  whileTap={{ scale: 0.95, transition: { duration: 0.15, ease: 'easeInOut' } }}
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </Link>
    </div>
  );
};

export default CardSlider;
