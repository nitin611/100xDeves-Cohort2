import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          {/* Logo */}
          <div className="text-lg font-bold">
            <a href="/" className="hover:text-blue-400">Todos</a>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 lg:space-y-0 lg:space-x-6 text-center lg:text-left">
            <a href="/" className="hover:text-blue-400">Home</a>
            <a href="/about" className="hover:text-blue-400">About Us</a>
            <a href="/contact" className="hover:text-blue-400">Contact Us</a>
            <a href="/signin" className="hover:text-blue-400">Sign In</a>
            <a href="/signup" className="hover:text-blue-400">Sign Up</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">
              <FaFacebook className="text-2xl" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">
              <FaTwitter className="text-2xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-400">
              <FaInstagram className="text-2xl" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-600">
              <FaLinkedin className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Todos. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
