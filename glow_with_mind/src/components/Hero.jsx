import React from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div>
      <Navbar />
        <div
      className="h-screen flex flex-col items-center justify-center text-gray-800 text-center bg-[#F7F5F2] bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-bg.jpg')" }}
    >
      {/* Animated Heading */}
      <motion.h1
        className="text-5xl font-bold text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Your Journey, Your Story
      </motion.h1>

      {/* Animated Subheading */}
      <motion.p
        className="text-lg mt-1 text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Heal yourself with Us
      </motion.p>

      {/* Animated Description */}
      <motion.p
        className="text-lg mt-1 text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Your trusted guide to mental health & wellness
      </motion.p>

      {/* Uncomment and animate the button */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Link to="/Login_page">
          <button className="mt-4 px-6 py-3 bg-white text-gray-800 rounded-lg font-medium shadow-md hover:bg-gray-300 transition-all duration-300">
            Start
          </button>
        </Link>
      </motion.div> */}
    </div>
    </div>
  
  );
};

export default Hero;
