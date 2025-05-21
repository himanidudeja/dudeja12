import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Meena Bakshi',
    position: 'Founder',
    image: '/p1.jpg',
  },
  {
    name: 'Surya dav',
    position: 'Business Unit - Operations Head',
    image: '/p2.avif',
  },
  {
    name: 'Anupama Rao',
    position: 'Senior Manager - Business Development',
    image: '/p3.avif',
  },
  {
    name: 'Rahul Sandeep',
    position: 'Operations',
    image: '/p4.jpg',
  },
  {
    name: 'Hardik Mahyawanshi',
    position: 'Manager - Counselling',
    image: '/p5.avif',
  },
  {
    name: 'Nisha',
    position: 'Manager Programs',
    image: '/p6.avif',
  },
  {
    name: 'Himanshi',
    position: 'Operations Associate',
    image: '/p7.jpg',
  },
  {
    name: 'Rahul jain',
    position: 'Content Specialist',
    image: '/p8.avif',
  },
  {
    name: 'Teena',
    position: 'Marketing Intern',
    image: '/p10.jpeg',
  },
];

const Ourteam = () => {
  return (
    <div className="flex items-center justify-between bg-[#f2ede2] min-h-screen px-10">
      
      {/* Left Side - Team Members */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 w-44 h-56 flex flex-col items-center justify-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-md"
            />
            <h2 className="text-md font-semibold mt-3 text-center">{member.name}</h2>
            <p className="text-gray-500 text-sm">{member.position}</p>
          </div>
        ))}
      </motion.div>

      {/* Right Side - Our Team Heading with Description */}
      <div className="flex justify-center items-center w-1/2">
        <motion.div
          className="relative text-center"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          <h2 className="relative text-5xl font-bold text-[#3d405b] inline-block -translate-y-1">
            <span className="relative z-5">Our Team</span>
          </h2>

          {/* Description */}
          <p className="mt-1 text-[#372222]">
            "Meet the heart and soul of our organization — our incredible team. Each member brings their own unique skills, passion, and dedication to create an environment where ideas thrive, challenges are met with creativity, and goals are achieved together.
            We believe that great things happen when people with shared values come together with a common purpose. Our team is driven by a deep commitment to mental wellness, compassion, and a desire to bring positive change to the community we serve.
            Through collaboration, respect, and continuous learning, we strive to create not just a workplace, but a family that grows together and supports one another in every step of the journey."
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Ourteam;
