import React from 'react';
import { motion } from 'framer-motion';

const Ourstory = () => {
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
         Our Story
        </motion.h3>

        {/* Content */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-[#372222] text-lg mb-6 text-center"
        >
          Glow with Mind was born from a simple truth — life can be overwhelming, and mental health is just as important as physical health. In the chaos of our daily routines, we often forget to pause, breathe, and take care of our inner selves.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="text-[#372222] text-lg mb-6 text-center"
        >
          We believe that every person carries untold stories — stories of courage, struggles, healing, and growth. Behind every smile, there may be silent battles that no one else sees. That’s why Glow with Mind exists — to be a safe space where you feel seen, heard, and supported.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="text-[#372222] text-lg mb-6 text-center"
        >
          Our journey started with a mission to break the stigma around mental health. We wanted to create a platform that reminds you it’s okay to not be okay. It’s okay to rest. It’s okay to ask for help. Mental wellness is not a destination — it’s a journey of small steps, self-love, and patience.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.9 }}
          className="text-[#372222] text-lg mb-6 text-center"
        >
          Together, let’s create a world where mental health is celebrated, kindness is everywhere, and every soul feels empowered to shine their light. You are not alone on this journey. We are with you — today, tomorrow, always.
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

export default Ourstory;
