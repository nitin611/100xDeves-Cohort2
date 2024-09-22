const mongoose=require("mongoose")

mongoose.connect("MONGO_DB_URL/Todo")

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean

});

const todo=mongoose.model('tood',todoSchema)

module.exports={
    todo
}
