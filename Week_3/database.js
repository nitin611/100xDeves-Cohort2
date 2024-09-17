const express = require("express");
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb+srv://jhanitin906:JCdTwJn5maL6KN9S@cluster0.afvlzq3.mongodb.net/userappnew", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("Could not connect to MongoDB:", err));

const app = express();

app.use(express.json());

// Define User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
});

// Create User Model
const User = mongoose.model('User', userSchema);

// Sign-up Route
app.post("/signup", async function(req, res) {
    const { username, password, name } = req.body;

    try {
        // Check if user already exists with this email
        const existingUser = await User.findOne({ email: username });
        if (existingUser) {
            return res.status(400).json({ msg: "Username already exists" });
        }

        // Create new user
        const user = new User({
            name: name,
            email: username,
            password: password
        });

        // Save user
        await user.save();

        // Send success response
        res.status(201).json({ msg: "User created successfully!" });
    } catch (error) {
        // Handle errors
        console.error("Error creating user:", error);
        res.status(500).json({ msg: "Internal server error" });
    }
});

// Other CRUD operations can go here (user.update, user.delete, etc.)

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
