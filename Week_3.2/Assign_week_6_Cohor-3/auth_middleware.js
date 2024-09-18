// Assignment #1 - Creating an auth middleware
// Can you try creating a middleware called auth that verifies if a user is logged in and ends the request early if the user isn’t logged in?

const express=require('express')

const app=express()
app.use(express.json())

app.get("/",(req,res)=>{

})