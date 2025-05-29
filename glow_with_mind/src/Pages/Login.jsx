import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router";
import { useNavigate } from "react-router";
import GoogleAuth from "../components/GoogleAuth";
import axios from 'axios';
import axiosInstance from '../../axiosInstance';
import { baseURL } from "../../config";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log("Received values of form", e);
    e.preventDefault();
    try {
      const res = await axios.post(`${baseURL}/api/auth/login`, formData);
      console.log("Login Successfull:", res.data);
      setFormData(res.data);

      const { token, user } = res.data;
      if (token && user) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        navigate("/Sidebar");
      }
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };
const BASE_URL = import.meta.env.VITE_PROD_BASE_URL;
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center bg-[#fefef7]">
      <div className="flex w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Side - Login Form */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 bg-white px-10 py-12"
        >
          <h2 className="text-3xl text-yellow-500 font-bold  mb-2">Log In</h2>
          <p className="text-gray-500 mb-8 text-sm">Welcome back! Please enter your details</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            <div className="text-sm text-right mb-4">
              <NavLink to="/ForgotPassword">
              <span className="text-yellow-500 hover:underline">forgot password ?</span>
            </NavLink>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#deb821] text-white py-2 rounded-lg font-semibold hover:bg-[#ccaa33] transition"
            >
              Log in
            </motion.button>
          </form>

          <div className="my-6 flex items-center gap-2">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="text-gray-400 text-sm">Or Continue With</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          <GoogleAuth />

          <p className="text-center text-sm mt-6 text-gray-600">
            Don’t have an account?
            <NavLink to="/signup">
              <span className="text-yellow-500 font-semibold ml-1 hover:underline">Sign up</span>
            </NavLink>
          </p>
        </motion.div>

        {/* Right Side - Image */}
        <div className="hidden md:block md:w-1/2 bg-purple-100 relative">
          <img
            src="/download.jpeg" // replace with your actual image path
            alt="Login Visual"
            className="w-full h-full object-cover rounded-tr-3xl rounded-br-3xl"
          />
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Login;
