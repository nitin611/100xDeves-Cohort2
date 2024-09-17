const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

app.use(express.json());

app.post("/healthy-checkup", (req, res) => {
    const kidney = req.body.kidney;
    const response = schema.safeParse(kidney);

    if (!response.success) {
        return res.status(411).send({ error: "Validation failed", issues: response.error.errors });
    }
    res.send({
        message: "Validation successful",
        data: response.data
    });
});

// app.use((error, req, res, next) => {
//     res.status(500).send("Internal server crash");
// });

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
