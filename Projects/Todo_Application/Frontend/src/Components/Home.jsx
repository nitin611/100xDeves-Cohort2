import React from 'react';
import { Link } from 'react-router-dom'; // If using react-router for navigation
import { AiOutlinePlusCircle } from 'react-icons/ai';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-teal-500 flex flex-col items-center justify-center p-8 text-white">
      
      {/* Motivational Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">
          Welcome to Your Personal Todo Manager!
        </h1>
        <p className="text-lg md:text-xl italic animate-fadeInUp">
          "The secret of getting ahead is getting started."
        </p>
        <p className="text-md mt-2 md:text-lg">
          Stay organized, achieve your goals, and start today by creating your daily todos!
        </p>
      </div>
      
      {/* Add Todos Button */}
      <div className="mt-10">
        <Link to="/add-todo">
          <button className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full text-xl font-semibold shadow-lg transition-transform duration-300 transform hover:scale-105 flex items-center animate-fadeInUp">
            <AiOutlinePlusCircle className="mr-2" size={25} />
            Add Todos
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
