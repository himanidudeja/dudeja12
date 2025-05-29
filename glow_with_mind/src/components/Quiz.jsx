import React from "react";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from "./Footer";

const Quiz = () => {
  return (
    
    <div>
      <div className="flex flex-col md:flex-row bg-[#f2ede2] p-8 min-h-screen w-full">
      {/* Animated Text and Heading */}
      <motion.div
        className="md:w-1/2 p-6 text-[#3d405b]"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="bg-[#ffddd2] text-sm px-3 py-1 rounded-full">Quiz for your Mental Wellness </span>
        <motion.h2
          className="text-3xl font-bold mt-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          How Well Do You Take Care of Your Mental Health?
        </motion.h2>
        <motion.p
          className="mt-2 text-[#3d405b]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Take this short quiz to reflect on your mental well-being and discover ways to improve your self-care habits.
        </motion.p>
        {/* Animated Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Link to="/QuizPage">
            <button className="mt-4 px-6 py-3 bg-[#81b29a] text-white rounded-lg font-medium shadow-md  hover:bg-[#6a8f8d] transition
                    hover:scale-105 transition-all duration-300 ">
              Take Quiz
            </button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Animated Video Section */}
      <motion.div
        className="md:w-1/2 flex justify-center items-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <video
          src="/video.mp4"
          className="w-full h-auto rounded-lg shadow-md"
          controls
          autoPlay
          loop
          muted
        />
      </motion.div>
    </div>
    <Footer />
    </div>
  );
};

export default Quiz;
