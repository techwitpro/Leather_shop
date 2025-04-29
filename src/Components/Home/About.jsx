import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { about } from '../../assets';
import { Link } from 'react-router-dom';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.15,
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="w-full" ref={ref}>
      {/* Title and paragraph */}
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.h1 className="primary-header mt-20" variants={childVariants}>
          About Our Company
        </motion.h1>
        <motion.p className="primary-paragraph" variants={childVariants}>
          Know About Us
        </motion.p>
      </motion.div>

      {/* Full screen section with animation */}
      <motion.section
        className="relative w-full h-screen bg-black overflow-hidden"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        {/* Background Image */}
        <motion.img
          src={about}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover z-0"
          variants={{
            hidden: { opacity: 0, scale: 1.1 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 1.8, ease: 'easeOut' }}
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black z-10"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 0.5 },
          }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        ></motion.div>

        {/* Foreground content */}
        <motion.div
          className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4"
          variants={containerVariants}
        >
          <motion.h1
            className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-[80px] leading-tight lg:leading-[1.2] font-normal tracking-wide text-center russo"
            variants={childVariants}
          >
            Discover our leather website,<br />
            offering premium, handcrafted<br />
            leather products
          </motion.h1>
          <Link to="/about">
            <motion.button
              className="button-primary mt-6 text-nowrap"
              variants={childVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Read More
            </motion.button>
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;
