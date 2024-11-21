import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"Complete react"}]
}

// state ke andar current state of the object like avi kya state hai ye milta hai and inside action
// 
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },

        removeTodo:(state,action)=>{
            // filter only give true value
            //  jo match  kar raha wo ni milega so remove hojayega wo wala todo-
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },


    }

})

// now we have to export 2 type of reducers -
// export each functionality indiviudally kaam aati hai jaise addTodo,removeTodo ye sab -ye component me kaam aayega
// ye component me kaam aata hai-
export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer