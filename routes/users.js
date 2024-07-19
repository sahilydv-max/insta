const mongoose = require('mongoose')


const TodoSchema=new mongoose.Schema({
    username:String,
    password:String
})

const Todomodel= mongoose.model("todos",TodoSchema)

module.exports=Todomodel