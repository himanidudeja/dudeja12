import React from "react";
import { motion } from 'framer-motion';

const Sessionbg = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#f2ede2] p-8 min-h-screen w-full">
      <motion.div
        className="md:w-1/2 p-8 text-[#3d405b]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-5xl flex justify-center font-bold mt-40"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          BOOK YOUR SESSION TODAY!!
        </motion.h2>
        <motion.p
          className="mt-4 text-[#372222]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          "Your mental health is as important as your physical health. Don't keep your thoughts and emotions inside. Talk to our friendly and experienced therapists who are here to guide you, support you, and listen to you. Book your session today and start your journey towards peace and happiness."
        </motion.p>
      </motion.div>
      
      <motion.div
        className="md:w-1/2 flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <img
          src="/yogaa.webp"
          alt="About Us"
          className="w-full h-auto shadow-md rounded-lg object-cover"
        />
      </motion.div>
    </div>
  );
};

export default Sessionbg;
