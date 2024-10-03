const mongoose = require("mongoose");
const Todo = require("./todo"); // Import the Todo model

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    todos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Todo' // Reference to the Todo model
    }]
}, { timestamps: true });

// Exporting the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
