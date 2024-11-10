import {createContext,useContext} from 'react'

export const TodoContext=createContext({
    // ye todos ek variable hi hai yaha string ke jagah array of object create kiye hai bash-
    todos:[
        {
            id:1,
            todo:"Todo msg",
            completed:false
        }

    ],
    // now define methods-
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    toggleCompleted:(id)=>{}
})

// custom hook of contextApi-
export const useTodo=()=>{
    return useContext(TodoContext)
}

// ye yahi isliye kar diye taki app.jsx me .Provider na likhna pare-
export const TodoProvider=TodoContext.Provider


