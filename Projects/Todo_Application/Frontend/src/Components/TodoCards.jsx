import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrDocumentUpdate } from "react-icons/gr";

const TodoCards = ({ title, body, id, delid, display, updateId, toBeUpdate }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div>
        <h5 className="text-lg font-semibold mb-2 text-gray-900">{title}</h5>
        <p className="text-gray-600">
          {body.slice(0, 77)}{body.length > 77 && "..."}
        </p>
      </div>
      <div className="flex justify-around mt-4">
        {/* Update button */}
        <div
          className="flex items-center bg-blue-500 text-white px-3 py-2 rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300"
          onClick={() => {
            display("block");
            toBeUpdate(updateId);
          }}
        >
          <GrDocumentUpdate className="mr-2" /> Update
        </div>
        
        {/* Delete button */}
        <div
          className="flex items-center bg-red-500 text-white px-3 py-2 rounded-lg cursor-pointer hover:bg-red-600 transition duration-300"
          onClick={() => delid(id)}
        >
          <AiFillDelete className="mr-2" /> Delete
        </div>
      </div>
    </div>
  );
};

export default TodoCards;
