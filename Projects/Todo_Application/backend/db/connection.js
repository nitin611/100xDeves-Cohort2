const mongoose = require("mongoose");

const connection = async (req, res) => {
        try {
            await mongoose.connect("mongodb+srv://jhanitin906:JCdTwJn5maL6KN9S@cluster0.afvlzq3.mongodb.net/todoApp")
            .then(() => {
                console.log("Db connected successfully");
            })
            .catch((error) => {
                console.log("Db connection error:", error);
            });
        } catch (err) {
            
            return res.status(400).send({
                msg:"There is error in connection with db"
            })
            
        }


   
};

module.exports = connection;
