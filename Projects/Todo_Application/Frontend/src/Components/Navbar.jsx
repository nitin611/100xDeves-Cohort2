import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa'; // User profile icon
import { AiOutlineHome, AiOutlineInfoCircle, AiOutlinePhone } from 'react-icons/ai'; // Home, AboutUs, Contact icons
import { MdOutlineLogin, MdOutlineAppRegistration } from 'react-icons/md'; // Sign in, Sign up icons

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-teal-500 to-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Section - Logo */}
        <div className="text-white font-bold text-xl cursor-pointer hover:scale-110 transition duration-300">
          <span className="flex items-center">
            <span className="bg-white p-2 rounded-full text-blue-600 mr-2">📋</span>
            <span className="ml-1">Todos</span>
          </span>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-white flex items-center hover:text-gray-200 hover:scale-110 transition duration-300"
          >
            <AiOutlineHome className="mr-2" />
            Home
          </Link>
          <Link
            to="/about"
            className="text-white flex items-center hover:text-gray-200 hover:scale-110 transition duration-300"
          >
            <AiOutlineInfoCircle className="mr-2" />
            About Us
          </Link>
          <Link
            to="/todo"
            className="text-white flex items-center hover:text-gray-200 hover:scale-110 transition duration-300"
          >
            <AiOutlinePhone className="mr-2" />
            To do
          </Link>
        </div>

        {/* Right Section - SignIn, SignUp, User Profile */}
        <div className="flex space-x-4 items-center">
          <Link
            to="/signin"
            className="text-white flex items-center bg-teal-700 px-4 py-2 rounded-lg hover:bg-teal-800 hover:scale-105 transition duration-300"
          >
            <MdOutlineLogin className="mr-1" />
            Sign In
          </Link>
          <Link
            to="/signup"
            className="text-white flex items-center bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800 hover:scale-105 transition duration-300"
          >
            <MdOutlineAppRegistration className="mr-1" />
            Sign Up
          </Link>
          <Link
            to="/signout"
            className="text-white flex items-center bg-teal-700 px-4 py-2 rounded-lg hover:bg-teal-800 hover:scale-105 transition duration-300"
          >
            <MdOutlineLogin className="mr-1" />
            Log Out
          </Link>

          <div className="text-white cursor-pointer hover:text-gray-200 hover:scale-110 transition duration-300">
            <FaUserCircle size={30} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
