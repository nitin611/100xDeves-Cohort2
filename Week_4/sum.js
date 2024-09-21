const express = require("express");
const app = express();

app.get("/sum", (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    // Check if both 'a' and 'b' are valid numbers
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send("Invalid input: Please provide valid numbers for 'a' and 'b'.");
    }

    const sum = a + b;
    res.send(sum.toString()); // Return as JSON instead of plain text
});

// Listen on port 5000
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
