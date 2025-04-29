import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { productCategory1, productCategory2, productCategory3 } from '../../assets';

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const AnimatedCard = ({ src, title, subtitle }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="w-full h-[400px] lg:h-[752px] bg-gray-200 rounded-none overflow-hidden"
    >
      <div className="relative w-full h-full">
        <img
          src={src}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 right-0 w-full bg-gradient-to-t from-black to-transparent p-4 flex flex-col justify-end h-full">
          <div className="items-center text-center">
            <h3 className="card-title text-white">{title}</h3>
            <p className="card-paragraph">{subtitle}</p>

            {/* Smooth animated button */}
            <motion.button
              className="button-secondary mt-4"
              whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: 'easeOut' } }}
              whileTap={{ scale: 0.95, transition: { duration: 0.15, ease: 'easeInOut' } }}
            >
              Shop Now
            </motion.button>



          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProductCategory = () => {
  return (
    <div className="mx-auto">
      <motion.h1
        className="primary-header mt-20"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Product By Category
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        className="primary-paragraph"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        Discover our exclusive collection of products, meticulously crafted to <br />
        enhance your style and elevate your everyday experience.
      </motion.p>
      <Link to="/shop">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-8 overflow-hidden px-2 md:px-0">
          <AnimatedCard
            src={productCategory1}
            title="Super Regular Belt"
            subtitle="Looks Better"
          />
          <AnimatedCard
            src={productCategory2}
            title="Bags Collections"
            subtitle="Style Perfections"
          />
          <AnimatedCard
            src={productCategory3}
            title="Outfit Shoes"
            subtitle="Style Yourself"
          />
        </div>
      </Link>
    </div>
  );
};

export default ProductCategory;
