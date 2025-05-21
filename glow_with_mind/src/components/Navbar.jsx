import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HomeOutlined, TeamOutlined, SolutionOutlined, ScheduleOutlined, DownOutlined,PlayCircleOutlined } from '@ant-design/icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#f9f8f4] shadow-md px-6 py-4 flex justify-between items-center rounded-xl">
            {/* Logo */}
            <h2 className="text-xl font-bold text-gray-800">Glow with Mind</h2>

            {/* Navigation Links */}
            <ul className="flex space-x-6">
                <li>
                    <NavLink to="/" className="flex items-center gap-2 text-gray-800 hover:text-gray-500 transition">
                        <HomeOutlined />
                        <span>Home</span>
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/About_Us" className="flex items-center gap-2 text-gray-800 hover:text-gray-500 transition">
                        <TeamOutlined />
                        <span>About Us</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Resources" className="flex items-center gap-2 text-gray-800 hover:text-gray-500 transition">
                    <SolutionOutlined />
                        <span>Resources</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Book_sessions" className="flex items-center gap-2 text-gray-800 hover:text-gray-500 transition">
                        <ScheduleOutlined />
                        <span>Book Sessions</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Audiotape" className="flex items-center gap-2 text-gray-800 hover:text-gray-500 transition">
                       <PlayCircleOutlined />
                        <span>Videotape</span>
                    </NavLink>
                </li>
            </ul>

            {/* Auth Buttons */}
            <div className="flex space-x-4">
                <NavLink to="/signup">
                    <button className="bg-[#81b29a] text-white px-4 py-2 rounded-lg shadow-md  hover:bg-[#6a8f8d] transition
                    hover:scale-105">
                        Sign Up
                    </button>
                </NavLink>
                <NavLink to="/TherapistRegister">
                    <button className="bg-[#81b29a] text-white px-4 py-2 rounded-lg shadow-md  hover:bg-[#6a8f8d] transition
                    hover:scale-105">
                        Register
                    </button>
                </NavLink>
                <NavLink to="/Login">
                    <button className="bg-[#81b29a] text-white px-4 py-2 rounded-lg shadow-md  hover:bg-[#6a8f8d] transition
                    hover:scale-105">
                        Login
                    </button>
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
