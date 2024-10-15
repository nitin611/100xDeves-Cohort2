import { useState } from 'react';
import './App.css';
// --------------------------------When to use arrow function inside onClick handler---------------------------
// Function reference (e.g., onClick={myFunction}): Use this when you don't need to pass any arguments or do extra logic inside the handler.
// Arrow function (e.g., onClick={() => myFunction(arg)}): Use this when you need to pass arguments or write additional logic within the onClick handler.

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="flex flex-wrap justify-center bottom-2 insert-x-0 px-2">
        <div className='flex flex-wrap gap-3 shadow-xl bg-white px-3 py-1 mt-3 rounded-3xl'>
          <button 
            onClick={() => setColor("red")}
            className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button 
            onClick={() => setColor("green")}
            className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button 
            onClick={() => setColor("brown")}
            className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>
          <button 
            onClick={() => setColor("yellow")}
            className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button 
            onClick={() => setColor("black")}
            className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button 
            onClick={() => setColor("purple")}
            className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button 
            onClick={() => setColor("blue")}
            className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button 
            onClick={() => setColor("pink")}
            className='outline-none px-4 py-2 rounded-full text-white shadow-lg'
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
