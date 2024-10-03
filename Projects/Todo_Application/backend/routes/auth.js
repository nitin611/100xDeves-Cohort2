const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { z } = require("zod");
const { hashPassword, comparePassword } = require("../utils/bcryptUtil"); // Adjust the path if necessary

// Zod schema for registration validation
const registerSchema = z.object({
    email: z.string().email("Invalid email format"),
    username: z.string().min(3, "Username must be at least 3 characters long"),
    password: z.string().min(6, "Password must be at least 6 characters long")
});

// Zod schema for sign-in validation
const signInSchema = z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters long")
});

// Sign-up route
router.post("/register", async (req, res) => {
    try {
        const validationResult = registerSchema.safeParse(req.body);
        if (!validationResult.success) {
            return res.status(400).json({
                msg: "Validation failed",
                errors: validationResult.error.errors
            });
        }

        const { email, password, username } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                msg: "User already exists"
            });
        }

        // Hash password using the utility function
        const hashedPassword = hashPassword(password);

        // Create new user
        const user = new User({ email, username, password: hashedPassword });
        await user.save();

        res.status(200).json({
            msg: "User created successfully",
            user: { email: user.email, username: user.username } // Don't send the password in the response
        });
    } catch (err) {
        res.status(500).json({
            msg: "Server error",
            error: err.message
        });
    }
});

// Sign-in route
router.post("/signIn", async (req, res) => {
    try {
        const validationResult = signInSchema.safeParse(req.body);
        if (!validationResult.success) {
            return res.status(400).json({
                msg: "Validation failed",
                errors: validationResult.error.errors
            });
        }

        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                msg: "User does not exist, please sign up"
            });
        }

        // Check if the password is correct using the utility function
        const isPasswordCorrect = comparePassword(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({
                msg: "Password is incorrect"
            });
        }

        // Success, return user data (excluding password)
        res.status(200).json({
            msg: "User signed in successfully",
            user: { email: user.email, username: user.username }
        });
    } catch (err) {
        res.status(500).json({
            msg: "Server error",
            error: err.message
        });
    }
});

module.exports = router;
