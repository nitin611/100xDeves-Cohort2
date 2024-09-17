/*
---------------------------Assignment #1 - Trying to code a todo app and store data into the array----------------
*/
const express=require('express');
const app=express();

app.use(express.json());

let todos=[];

        /**
 * create a route handler for POST request
 *
 * Create a new todo object and add it to the todos array
 *
 * URL: localhost:3000/todos/create
 * Example: localhost:3000/todos/create
 */

app.post("/todos/create",(req,res)=>{
        const {todo}=req.body;

        const id=parseInt(req.body.id);

        if(!id){
            return res.send("Id cannot be empty");
        }
          // check karo todo pehle se same id se hai ki nahi--
          for(let i=0;i<todos.length;i++){
              // if todo already exists with the given id, then usko ye response bhejo-
            if(todos[i].id===id){
                return res.send("Todo already exists with id"+id);
            }
          }
           // create a new todo object
           const newTodo={
            title:todo,
            id:id,
           }

           // add the new todo object to the todos array
           todos.push(newTodo);



           res.send("Todo added successfully");
});

/**
 * create a route handler for DELETE request
 *
 * Delete all the todos from the array
 *
 * URL: localhost:3000/todos/delete/all
 * Example: localhost:3000/todos/delete/all
 */
app.delete("/todos/delete/all",(req,res)=>{
        todos=[];
        res.send("All todos deleted successfully");
});

/**
 * create a route handler for DELETE request
 *
 * Delete the todos with the given id from the array
 *
 * URL: localhost:3000/todo/delete/:id
 * Example: localhost:3000/todo/delete/1
 */

app.delete("/todos/delete/:id",(req,res)=>{
         // get the todo id from the request parameters and convert it to integer
         const todoId=parseInt(req.params.id);
         let deleted=false;
         const tempTodos=[];

         for(let i=0;i<todos.length;i++){
            if(todos[i].id===todoId){
                deleted=true;
                continue;   // skip adding this todo to tempTodos
            }
            tempTodos.push(todos[i]);
         }
         if(!deleted){
            res.send("To do not found with this id"+id);
         }
         todos=tempTodos;

         res.send("To do deleted successfully with the id"+todoId);


});
/**
 * create a route handler for PUT (Update) request
 *
 * Update the todos with the given id in the array
 *
 * URL: localhost:3000/todo/update/:id
 * Example: localhost:3000/todo/update/1
 */
app.put("/todo/update/:id",(req,res)=>{
     // get the todo and todo id from the request body and parameters
        const { todo } = req.body;

        const todoId=parseInt(req.params.id);
         // if todo is empty, send a response with message "Todo cannot be empty"
        if(!todo || todo.trim()==""){
            return res.send("To do cannot be empty");
        }
        let updated=false;
        // find the todo with the given id from the todos array and update the title
        for(let i=0;i<todos.length;i++){
            // if todo is found with the given id, update the title and set updated to true
            if(todos[i].id===todoId){
                todos[i].title=todo;
                updated=true;
            }
        }
        if(!updated){
            res.send("To do not found with id: "+todoId);
        }
        res.send("To do updated successfully!!!");

});
/**
 * create a route handler for GET (Read) request
 *
 * Read all the todos from the array
 *
 * URL: localhost:3000/todo/read/all
 * Example: localhost:3000/todo/read/all
 */
app.get("/todo/read/all",(req,res)=>{
        // if no todos are found, send a response with message "No todos found"
        if(todos.length===0){
            res.send("No To dos found");
        }
        res.send(todos);
});

app.listen(5000,()=>{
    console.log("server is running on port 5000");
    


})