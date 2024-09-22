const express=require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app=express();
const cors=require('cors')

app.use(express.json());
app.use(cors());

app.get("/todos",async(req,res)=>{
    const todos= await todo.find({});
    return res.status(200).json({
        todos,
    })


});
// post a new todo-
app.post("/todo",async(req,res)=>{
    const parsedPayload=createTodo.safeParse(req.body);
    if(!parsedPayload.success){
        return res.status(411).send({
            success:false,
            msg:"You sent the wrong inputs",
        })
    }
    await todo.create({
        title: req.body.title,
        description: req.body.description,
        completed: false
    });
    res.json({
        msg:"To do created successfully"
    })
    
});
// update todo-
app.put("/completed",async(req,res)=>{
    const parsedUpdated=updateTodo.safeParse(req.body);
    if(!parsedUpdated.success){
        return res.status(411).send({
            success:false,
            msg:"you sent wrong input while updating todo"
        })
    }
    await todo.updateOne({ _id: req.body.id }, { completed: true });
    res.json({
        msg:"Todo updated"
    })

    
})
// delete a todo-
app.delete("/todo/:id", async (req, res) => {
    await todo.deleteOne({ _id: req.params.id });
    res.json({
        msg: "Todo deleted"
    });
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})