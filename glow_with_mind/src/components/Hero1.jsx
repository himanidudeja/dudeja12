import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#f2ede2] p-8 min-h-screen w-full">
      
      {/* Left Text Section */}
      <motion.div
        className="md:w-1/2 p-8 text-[#3d405b]"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl flex justify-center font-bold mt-40">About Us</h2>
        <p className="mt-4 text-[#372222]">
          At Mental Wellness Glow with Mind, we believe that mental well-being is just as important as physical health. In today’s fast-paced world, stress, anxiety, and emotional struggles have become a common part of life. Yet, many people feel alone in their journey, hesitant to seek support due to stigma or lack of resources. Our mission is to empower individuals with the knowledge, tools, and support they need to nurture their mental health and live a fulfilling life.
          Whether you are looking for practical self-care tips, guided wellness practices, or professional guidance, we are here to support you every step of the way.
        </p>
      </motion.div>

      {/* Right Image Section */}
      <motion.div
        className="md:w-1/2 flex justify-center items-center"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img 
          src="/about-us-image.png" 
          alt="About Us" 
          className="w-full h-auto shadow-md rounded-lg object-cover"
        />
      </motion.div>
      
    </div>
  );
};

export default AboutUs;
