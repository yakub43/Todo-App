const mongoose = require("mongoose")
const { boolean } = require("zod")

mongoose.connect("mongodb+srv://root:root@mycluster.bm5ghca.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)

module.exports = {
    todo
}