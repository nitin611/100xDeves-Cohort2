import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {

//  defining state variable for rendring toDo from the backend - 

    const [todos,setTodos]=useState([]);

// ---------bad way to connect to backedn using cors as it give infinite request in network tab using this method-
    // fetch("http://localhost:3000/todos")
    // .then(async function(res){
    //   const json=await res.json();
    //   setTodos(json.todos);
    // })
  return (
   <div>
    <CreateTodo></CreateTodo>
    <Todos todos={todos}></Todos>
   </div>
  )
}

export default App
