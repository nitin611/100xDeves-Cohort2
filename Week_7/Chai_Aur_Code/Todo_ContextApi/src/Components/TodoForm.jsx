import React, { useState } from 'react';
import { useTodo } from '../context/todoContext';

function TodoForm() {
    const [todo,setTodo]=useState("");

    // yaha pe form me addtodo(joki app.jsx me hai) ki functionality chahiye so useTodo se lelo contextapi-
    const {addTodo}=useTodo()

    // method banate hai-
    const add=(e)=>{
        e.preventDefault()
        // agar todo me kuch nahi hai to ye 
        if(!todo) return

        // agar todo me value ho to-
        // yaha pe hmlog ko object pass karna parega kyuki array ke andar object hai so isliye-
        addTodo({todo:todo,completed:false})
        // field se value clear kardo-
        setTodo("");
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"

                // this is called wiring with state-
                value={todo}
                onChange={(e)=>setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

