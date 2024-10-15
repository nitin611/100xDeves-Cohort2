import { useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState({ title: '', description: '' });
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (todo.title && todo.description) {
      setTodos([...todos, todo]);
      setTodo({ title: '', description: '' }); // Clear the input fields after adding
    } else {
      alert("Please fill out both fields.");
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className='section'>
        <h1>ToDo Application</h1>
        <div className='lower-section'>
          <input
            type="text"
            name="title"
            placeholder='Enter title'
            value={todo.title}
            onChange={handleInputChange}
           
          />
          <input
            type="text"
            name="description"
            placeholder='Enter description'
            onChange={handleInputChange}
            value={todo.description}
          />
          <button onClick={addTodo}>Add Todo</button>
        </div>

        {/* Displaying the list of todos */}
        <div className="todo-list">
          {todos.length > 0 ? (
            todos.map((item, index) => (
              <div key={index} className="todo-item">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))
          ) : (
            <p>No todos yet. Start by adding one!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
