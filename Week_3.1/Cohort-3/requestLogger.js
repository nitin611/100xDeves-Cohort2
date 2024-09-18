const express = require("express");
const app = express();

// Middleware function to log the request method, URL, and timestamp
function requestLogger(req, res, next) {
    console.log(`Method: ${req.method}`);
    console.log(`URL: ${req.protocol}://${req.get("host")}${req.url}`);
    console.log(`Timestamp: ${new Date()}`);
    next(); // Pass control to the next middleware or route handler
}

app.use(express.json());
app.use(requestLogger); // Apply the middleware to all routes

// Define routes
app.get("/*", (req, res) => {
    res.send("hello");
});

app.post("/", (req, res) => {
    res.send("hi there");
});

app.put("*", (req, res) => {
    res.send("Welcome!");
});

app.delete("*", (req, res) => {
    res.send("Goodbye!");
});

// Start the server
app.listen(3000, () => {
    console.log("server is running on port 3000");
});
