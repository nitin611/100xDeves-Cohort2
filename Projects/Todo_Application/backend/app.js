const express=require("express")
const connection = require("./db/connection.js");
const auth=require("./routes/auth.js")
const todo=require("./routes/todos.js")
const app=express();
const cors = require("cors");

app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend's origin
    credentials: true,               // Allow credentials if you're using them
  }));
connection();
app.use(express.json());


// routes-
app.use("/api/v1",auth)
app.use("/api/v2",todo)


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})