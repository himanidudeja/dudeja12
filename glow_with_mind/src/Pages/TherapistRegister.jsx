import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom'; // ✅ FIXED: Added useNavigate
import { baseURL } from "../../config";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TherapistRegister = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    specialization: '',
    experience: '',
  });

  const navigate = useNavigate(); // ✅ Correct position

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/api/auth/registration2`, form);
      alert("Therapist registered successfully!");
      navigate("/Sidebar2"); // ✅ This will now work
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-[#e5edf4]">
      <div className="flex w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Side - Registration Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 bg-white px-10 py-12"
        >
          <h2 className="text-3xl text-blue-500 font-bold mb-2">Register as Therapist</h2>
          <p className="text-gray-500 mb-8 text-sm">Please enter your professional details</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Specialization</label>
              <input
                type="text"
                name="specialization"
                placeholder="e.g., Anxiety, PTSD"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">Experience (Years)</label>
              <input
                type="number"
                name="experience"
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#5379ac] text-white py-2 rounded-lg font-semibold hover:bg-[#3f54c0] transition"
            >
              Register
            </motion.button>
          </form>
        </motion.div>

        {/* Right Side - Image */}
        <div className="hidden md:block md:w-1/2 bg-purple-100 relative">
          <img
            src="/Maybe You Should Talk to Someone_ A Must Read.jpeg"
            alt="Register Visual"
            className="w-full h-full object-cover rounded-tr-3xl rounded-br-3xl"
          />
        </div>
      </div>
    </div>
    <Footer />
    </div>
    
  );
};

export default TherapistRegister;
