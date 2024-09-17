
/*
-------------Assignment #2 - Trying to code a filesystem based todo app and store data into the file--------
*/
const express=require('express')
const fs=require('fs');
const path = require("path");
const bodyParser = require("body-parser");


const app=express();
app.use(express.json());
app.use(bodyParser.json());
const todosFilePath = path.join(__dirname, "todos-data.json");

// Function to read todos-data from the file and return it as an array of todos objects

let reqcount=0;
let errorCount=0;
app.use(function (req, res, next) {
    reqcount++;
    console.log("Request count:", reqcount); 
    next();
});
app.use((err, req, res, next) => {
    
    res.status(404).send({});
    errorCount++;
    console.log("Error count",errorCount)
});

function readTodosFromFile() {
    try {
        const data = fs.readFileSync(todosFilePath, 'utf-8'); // Reading the file synchronously
        return JSON.parse(data); // Parse the JSON data into an array of objects
    } catch (error) {
        return []; // If file does not exist or there's an error, return an empty array
    }
}
function writeTodosToFile(todos) {
    fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2)); // Writing the JSON data back to the file
}



// // 1. GET `/todos` - Retrieve all todo items
// Description: Returns a list of all todo items.
// Response: 200 OK with an array of todo items in JSON format.
// Example: GET http://localhost:3000/todos
app.get("/todos",(req,res)=>{
    const todos=readTodosFromFile();
    res.status(200).json(todos);
});

// define the routes to get a specific todo by id
app.get("/todos/:id",(req,res)=>{
    const todos=readTodosFromFile();
    const todo=todos.find(todo=>todo.id===parseInt(req.params.id));
    if(todo){
        res.status(200).json(todo)
    }
    else{
        res.status(404).json({
            msg:"To do not found!"
        })
    }
});

// POST `/todos` - Create a new todo item
//    Description: Creates a new todo item.
//    Request Body: JSON object representing the todo item.
//    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
//    Example: POST http://localhost:3000/todos
//    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }

app.post("/todos", (req, res) => {
    const todos = readTodosFromFile();

    // Create a new todo with incremented ID
    const newTodo = {
        id: todos.length + 1, // Generate new ID based on the length of the array
        title: req.body.title,
        completed: req.body.completed || false,
        description: req.body.description, // Corrected "descreption" to "description"
    };
        todos.push(newTodo); // Add new todo to the list
        writeTodosToFile(todos); // Write updated todos list back to the file
        return res.status(201).json({
            id: newTodo.id,
            msg: "New todo created successfully"
        });
    
});


// . PUT `/todos/:id` - Update an existing todo item by ID
//    Description: Updates an existing todo item identified by its ID.
//    Request Body: JSON object representing the updated todo item.
//    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
//    Example: PUT http://localhost:3000/todos/123
//    Request Body: { "title": "Buy groceries", "completed": true }

app.put("/todos/:id",(req,res)=>{
    const todos=readTodosFromFile();
    const todoIndex=todos.findIndex(t=>t.id===parseInt(req.params.id))
    if(todoIndex!=-1){
        const updatedTodo = {
            id: todos[todoIndex].id,
            title: req.body.title,
            description: req.body.description,
        };
        todos[todoIndex]=updatedTodo;
        writeTodosToFile(todos)
        res.status(200).json({
            msg:"To do updated successfully!!"
        })
    }
    else{
        res.status(404).json({
            msg:"Todo not found with this id"
        })
    }

})


// 5. DELETE `/todos/:id` - Delete a todo item by ID
//    Description: Deletes a todo item identified by its ID.
//    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
//    Ex

app.delete("/todos/:id",(req,res)=>{
    const todos=readTodosFromFile();
    const newTodo=todos.filter(t=>t.id!==parseInt(req.params.id))
        if(newTodo.length!=todos.length){
        writeTodosToFile(newTodo); // Save the updated todos
        res.status(200).json({ message: "Todo deleted successfully" });
        }
        else{
            res.status(404).json({ message: "Todo not found" });

        }
    
})
app.use((req, res, next) => {
    res.status(404).send();
});

app.listen(3000,()=>{
    console.log("Server is running at port 3000");
})