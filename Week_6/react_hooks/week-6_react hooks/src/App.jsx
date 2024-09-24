import { useState } from 'react'
import { memo } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos,setTodos]=useState([
    {
      id:1,
      title:"Go to library",
      description:"Have to go to library tommorow"

    },
    {
      id:2,
      title:"Go to class",
      description:"Have to go to class"

    },
    {
      id:3,
      title:"Go to take bath",
      description:"Have to go to nahana"
    }
  ]);
  
  return (
 <div>
  
  {/* iterating over the map and rendring all the todos- */}

  {todos.map(todo=><Todo title={todo.title} description={todo.description}/>)}

 </div>

  )

}
function Todo({title,description}){
  return <div>
    <h1>
      {title}
    </h1>
    <p>
      {description}
    </p>
  </div>
}
    


export default App
