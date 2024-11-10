import React, { useState, useEffect } from 'react';
import './App.css'
import { TodoProvider } from './context/todoContext';
import { TodoForm, TodoItem } from './Components';


function App() {
  const [todos,setTodos]=useState([]);

  const addTodo=(todo)=>{
    // purane sare todos pehle chahiye then setTodos call karke naya todo add karo direct karenge to purane sare
    // erase ho jayenge and bash ek hi todo rahega latest wala-

    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }
  const updateTodo=(id,todo)=>{
    // call settodos ye todo array hai konsa aisa todo hai jo ish id ka hai loop lagao and har ek element pe jao and id
    // se match karo jish element ki id match hui ush todo ko select karlo
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id? todo :prevTodo)));

    // like this it is working-
    // prev.map((eachval)=>{
    //   if(eachval.id===id){
    //     todo
    //   }
    // })
  }
  const deleteTodo=(id)=>{
    // whenever delete naye array me jo id diye hai usko chor ke baki sab hona chahiye so, delte means isko chor
    // ke baki sab rakhna hai - for this use filter-
    setTodos((prev)=>prev.filter((todo)=>todo.id!==id));
  }
  const toggleCompleted=(id)=>{
    // agar match karta hai to baki sari values ko as it is rakho and ek value ko change kardo

    setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id ? {...prevTodo,completed:!prevTodo.completed}:prevTodo))
  }

  useEffect(() => {
    // sari values leke aao localstorage se-
    // ye sari values string me aati hai convert it to json-
    const todos=JSON.parse(localStorage.getItem("todos"));

    if(todos &&todos.length>0){
      setTodos(todos)
    }
  }, [])

  // yahape todos ko localstorage me save kar rahe hai jab Bhi naya todos aaraha hai to -
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  



  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleCompleted}}>
        <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            {/* Todo form goes here */} 
            <TodoForm></TodoForm>

        </div>
        <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
              {todos.map((todo)=>(
                <div className='w-full' 
                key={todo.id}>
                    <TodoItem todo={todo} />
                  </div>
              ))}
        </div>
    </div>
</div>
    </TodoProvider>

  )
}

export default App
