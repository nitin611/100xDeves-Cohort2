const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Todo = require("../models/todo");

// -----------------------------------------Create Task-----------------------------------------------
router.post("/addTask", async (req, res) => {
    try {
        const { title, body, email } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            const task = new Todo({ title, body, user: existingUser._id });

            await task.save();
            existingUser.todos.push(task);
            await existingUser.save();

            res.status(200).json({
                msg: "Task created successfully!",
                task: task
            });
        } else {
            res.status(404).json({ msg: "User not found" });
        }
    } catch (err) {
        res.status(400).json({
            msg: "Error while creating the task",
            error: err.message
        });
    }
});

// ---------------------------------------Update Task--------------------------------------------
router.put("/updateTask/:id", async (req, res) => {
    try {
        const { title, body, email } = req.body;
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            const task = await Todo.findByIdAndUpdate(req.params.id, { title, body }, { new: true });

            if (task) {
                res.status(200).json({
                    msg: "Task updated successfully!",
                    task: task
                });
            } else {
                res.status(404).json({ msg: "Task not found" });
            }
        } else {
            res.status(404).json({ msg: "User not found" });
        }
    } 
    catch (err) {
        res.status(400).json({
            msg: "Error while updating the task",
            error: err.message
        });
    }
});

// ----------------------------------------Delete Task---------------------------------------
router.delete("/deleteTask/:id", async (req, res) => {
    try {
        const { email } = req.body;
        
        // Find the user by email and remove the task from the user's todos array
        const existingUser = await User.findOneAndUpdate(
            { email },
            { $pull: { todos: req.params.id } },
            { new: true }
        );

        if (existingUser) {
            // Delete the task by its ID
            const task = await Todo.findByIdAndDelete(req.params.id);

            if (task) {
                res.status(200).json({
                    msg: "Task deleted successfully!",
                    task: task
                });
            } else {
                res.status(404).json({ msg: "Task not found" });
            }
        } else {
            res.status(404).json({ msg: "User not found" });
        }
    } catch (err) {
        res.status(400).json({
            msg: "Error while deleting the task",
            error: err.message
        });
    }
});


// --------------------------------------Show All Tasks of User---------------------------------
router.get("/tasks", async (req, res) => {
    try {
        const { email } = req.body;
        const existingUser = await User.findOne({ email }).populate('todos').sort({
            createdAt:-1});

        if (existingUser) {
            res.status(200).json({
                msg: "Tasks retrieved successfully!",
                tasks: existingUser.todos
            });
        } else {
            res.status(404).json({ msg: "User not found" });
        }
    } catch (err) {
        res.status(400).json({
            msg: "Error while retrieving tasks",
            error: err.message
        });
    }
});

module.exports = router;
