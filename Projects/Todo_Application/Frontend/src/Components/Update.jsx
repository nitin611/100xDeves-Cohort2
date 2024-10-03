import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Update = ({ display, update }) => {
  useEffect(() => {
    setInputs({
      title: update.title,
      body: update.body,
    });
  }, [update]);

  const [Inputs, setInputs] = useState({
    title: "",
    body: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = async () => {
    await axios
      .put(`${window.location.origin}/api/v2/updateTask/${update._id}`, Inputs)
      .then((response) => {
        toast.success(response.data.message);
      });

    display("none");
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-lg mx-auto mt-8">
      <h3 className="text-2xl font-semibold mb-6 text-gray-900">Update Your Task</h3>
      <input
        type="text"
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={Inputs.title}
        name="title"
        onChange={change}
        placeholder="Task Title"
      />
      <textarea
        className="w-full p-3 h-32 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={Inputs.body}
        name="body"
        onChange={change}
        placeholder="Task Description"
      />
      <div className="flex justify-between">
        <button
          className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          onClick={submit}
        >
          Update
        </button>
        <button
          className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition duration-300"
          onClick={() => display("none")}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Update;
