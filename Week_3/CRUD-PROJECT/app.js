const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Import cors package

// Connect to MongoDB
mongoose.connect("mongodb+srv://jhanitin906:JCdTwJn5maL6KN9S@cluster0.afvlzq3.mongodb.net/userappnew", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const app = express();

// Use CORS middleware
app.use(cors());

app.use(express.json());

// Define your User model
const User = mongoose.model('Users', { name: String, email: String, password: String });

// Signup route
app.post("/signup", async function(req, res) {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
        return res.status(400).send({ message: "User already exists" });
    }

    // Create new user
    const user = new User({ name, email, password });
    await user.save();

    res.json({ message: "User created successfully!" });
});

// Get users route
app.get("/users", async function(req, res) {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).send("Error retrieving users");
    }
});

// Update user route
app.put("/users/:email", async function(req, res) {
    const { email } = req.params;
    const { name, password } = req.body;

    try {
        const updatedUser = await User.findOneAndUpdate(
            { email },
            { name, password },
            { new: true }
        );
        if (!updatedUser) {
            return res.status(404).send("User not found");
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(500).send("Error updating user");
    }
});

// Delete user route
app.delete("/users/:email", async function(req, res) {
    const { email } = req.params;

    try {
        const deletedUser = await User.findOneAndDelete({ email });
        if (!deletedUser) {
            return res.status(404).send("User not found");
        }
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).send("Error deleting user");
    }
});

// Start server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
