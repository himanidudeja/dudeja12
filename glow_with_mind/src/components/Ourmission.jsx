import React from 'react';
import { motion } from 'framer-motion';

const Ourmission = () => {
  return (
    <div className="flex flex-col justify-center items-center p-8 min-h-screen w-full ">
      <div className="flex flex-col justify-center items-center p-8 text-[#3d405b] max-w-4xl">
        
        {/* Tagline */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold text-center mb-6"
        >
        Our Mission & Vision 
        </motion.h3>

        {/* Content */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-[#372222] text-lg mb-6 text-center"
        
        >
          
           Our mission is to create awareness about mental health and emotional well-being.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-[#372222] text-lg mb-6 text-center"
        >
           We drive change by imparting knowledge and facilitating collaboration.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="text-[#372222] text-lg mb-6 text-center"
        >
            We aim to empower communities by sharing information and creating a safe space for unfiltered conversations about mental health.
        </motion.p>

          <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 2.2 }}
                  className="text-[#372222] text-lg text-center font-semibold"
                >
                  Heal. Grow. Glow.
                </motion.p>
      </div>
    </div>
  );
};

export default Ourmission;
