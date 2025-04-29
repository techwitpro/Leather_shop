import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { lastAdded1, lastAdded2, lastAdded3, lastAdded4 } from '../../assets';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const LatestAdded = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const cards = [
    { img: lastAdded1, title: 'Jeores Bag' },
    { img: lastAdded2, title: 'Shoulders Bag' },
    { img: lastAdded3, title: 'Kittie Loafer' },
    { img: lastAdded4, title: 'Keep Wallet Free' },
  ];

  return (
    <motion.div
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className="mx-auto"
    >
      <h1 className="primary-header mt-20">Latest Added</h1>
      <p className="primary-paragraph">See Our New Products</p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="grid grid-cols-1 md:grid-cols-2 gap-2 px-2 md:px-0"
      >
        {cards.map((card, index) => (
          <motion.div key={index} variants={cardVariants}>
            <Link to="/shop">
              <div className="bg-white rounded-none shadow-lg overflow-hidden aspect-video relative w-full h-[300px] sm:h-[450px] xl:h-[650px] cursor-pointer">
                <motion.div
                  className="image-container relative z-0"
                  variants={imageVariants}
                >
                  <motion.img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover bg-gradient-to-t from-black to-transparent transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.08]"
                    whileHover={{ scale: 1.08 }}
                  />
                </motion.div>

                {/* Content with smooth stagger */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4 z-10 text-center"
                  variants={contentVariants}
                >
                  <motion.h2 className="card-title text-white" variants={textVariants}>
                    {card.title}
                  </motion.h2>
                  <motion.button
                    className="button-secondary w-full mt-2"
                    variants={textVariants}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: 'easeOut' } }}
                    whileTap={{ scale: 0.95, transition: { duration: 0.15, ease: 'easeInOut' } }}
                  >
                    Shop Now
                  </motion.button>
                </motion.div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default LatestAdded;
