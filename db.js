const mongoose= require('mongoose')

mongoose.connect('mongodb+srv://abhijit2919:12345@cluster0.p2tmg.mongodb.net/todos')

const todoSchema= mongoose.Schema({
    title:String,
    description: String,
    completed: Boolean
})
const todo = mongoose.model('todos',todoSchema)

module.exports={
    todo
}