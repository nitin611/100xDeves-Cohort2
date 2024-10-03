import React, { useEffect, useState } from "react";
import TodoCards from "./TodoCards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Update from "./Update";
import axios from "axios";

let id = sessionStorage.getItem("id");
let toUpdateArray = [];

const Todo = () => {
  const [Inputs, setInputs] = useState({
    title: "",
    body: "",
  });
  const [Array, setArray] = useState([]);

  const show = () => {
    document.getElementById("textarea").style.display = "block";
  };

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = async () => {
    if (Inputs.title === "" || Inputs.body === "") {
      toast.error("Title or Body Can't Be Empty");
    } else {
      if (id) {
        await axios
          .post(`${window.location.origin}/api/v2/addTask`, {
            title: Inputs.title,
            body: Inputs.body,
            id: id,
          })
          .then((response) => {
            console.log(response);
          });
        setInputs({ title: "", body: "" });
        toast.success("Your Task Is Added");
      } else {
        setArray([...Array, Inputs]);
        setInputs({ title: "", body: "" });
        toast.success("Your Task Is Added");
        toast.error("Your Task Is Not Saved! Please Sign Up.");
      }
    }
  };

  const del = async (Cardid) => {
    if (id) {
      await axios
        .delete(`${window.location.origin}/api/v2/deleteTask/${Cardid}`, {
          data: { id: id },
        })
        .then(() => {
          toast.success("Your Task Is Deleted");
        });
    } else {
      toast.error("Please Sign Up First");
    }
  };

  const dis = (value) => {
    document.getElementById("todo-update").style.display = value;
  };

  const update = (value) => {
    toUpdateArray = Array[value];
  };

  useEffect(() => {
    if (id) {
      const fetch = async () => {
        await axios
          .get(`${window.location.origin}/api/v2/getTasks/${id}`)
          .then((response) => {
            setArray(response.data.list);
          });
      };
      fetch();
    }
  }, [submit]);

  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-gradient-to-br from-teal-300 via-blue-300 to-indigo-300 py-8">
        <ToastContainer />
        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
          <div className="flex flex-col mb-4">
            <input
              type="text"
              placeholder="Title"
              className="p-3 rounded-lg border border-gray-300 shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="title"
              value={Inputs.title}
              onChange={change}
              onClick={show}
            />
            <textarea
              id="textarea"
              type="text"
              placeholder="Body"
              className="p-3 rounded-lg border border-gray-300 shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="body"
              value={Inputs.body}
              onChange={change}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
              onClick={submit}
            >
              Add Task
            </button>
          </div>
        </div>

        {/* Todo cards */}
        <div className="container mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array &&
            Array.map((item, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-4">
                <TodoCards
                  title={item.title}
                  body={item.body}
                  id={item._id}
                  delid={del}
                  display={dis}
                  updateId={index}
                  toBeUpdate={update}
                />
              </div>
            ))}
        </div>

        {/* Update modal */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden"
          id="todo-update"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Update display={dis} update={toUpdateArray} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
