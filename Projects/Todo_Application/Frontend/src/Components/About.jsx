import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-6 lg:px-32">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
          About Us
        </h1>

        {/* Developer Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 lg:p-12 transform hover:scale-105 transition-all duration-300 ease-in-out">
          <img
            src="https://via.placeholder.com/150" // Replace with your image URL
            alt="Nitin - Developer"
            className="w-40 h-40 rounded-full mx-auto mb-6 border-4 border-gray-300"
          />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Nitin</h2>
          <p className="text-lg text-gray-600 mb-6">
            Hi, I'm Nitin, the developer behind this project. I have a passion for web development and love creating efficient and user-friendly applications. My goal is to make this ToDo app as seamless and helpful as possible for your daily task management.
          </p>

          {/* Skills Section */}
          <div className="text-left space-y-4 lg:space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Skills</h3>
            <ul className="list-disc ml-6 space-y-2 text-gray-600">
              <li>Frontend: React, Tailwind CSS, JavaScript</li>
              <li>Backend: Node.js, Express, MongoDB</li>
              <li>Version Control: Git & GitHub</li>
              <li>UI/UX: Responsive Design, Animations</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-colors"
            >
              <FaTwitter className="text-3xl" />
            </a>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-lg text-gray-700 space-y-6">
          <p>
            This project was built with the aim of helping users manage their tasks efficiently through a simple and intuitive ToDo application. I believe in creating products that not only look good but also provide a seamless user experience.
          </p>
          <p>
            If you have any feedback or suggestions to improve this app, feel free to reach out to me via my social media links above.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
