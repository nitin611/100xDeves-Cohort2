import React from "react";
import {useState,useEffect} from 'react'

const Card = () => {
    const [messageCount, setMessageCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setMessageCount((prevCount) => prevCount + 1);
        }, 3000); // Increase count every 3 seconds
    
        // Cleanup the interval when the component is unmounted
        return () => clearInterval(interval);
      }, []);
  return (
    <div className="flex justify-center items-center  bg-gradient-to-br">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden w-80 transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-32"></div>
        <div className="p-6">
          <div className="flex items-center space-x-4">
            <img
              className="h-16 w-16 rounded-full border-4 border-white shadow-lg"
              src="/nitin.jpeg"
              alt="profile"
            />
            <div>
              <h2 className="text-xl font-bold text-gray-800">Nitin kumar jha</h2>
              <p className="text-gray-500 text-sm">Software Developer</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-gray-600 leading-relaxed">
             Right now learning Mern stack and trying to build different projects without using gpt
            </p>
          </div>

          <div className="mt-6 flex justify-between items-center">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition duration-300">
              Connect
            </button>

            {/* assignment - 2------------------ message count increase by 1 every 3 sec- */}
            <div className="relative inline-block">
          <button className="px-4 py-2 bg-indigo-500 text-white rounded-full shadow-md hover:bg-indigo-600 transition duration-300">
            Messages
          </button>
          {messageCount > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full -translate-x-1/2 -translate-y-1/2">
              {messageCount}
            </span>
          )}
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
