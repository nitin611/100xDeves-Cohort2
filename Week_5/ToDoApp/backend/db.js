const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://jhanitin906:JCdTwJn5maL6KN9S@cluster0.afvlzq3.mongodb.net/Todo")

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean

});

const todo=mongoose.model('tood',todoSchema)

module.exports={
    todo
}
