const Todo=require("../models/todos.js")

const getTodos=async (req,res)=>{
    const todos=await Todo.find({})
    res.send(todos)
}

const getTodo=async (req,res)=>{
    const id=req.params.id
    const todo=await Todo.findById(id)
    res.send(todo)
}

const createTodo=async (req,res)=>{
    const todo=req.body
    Todo.create(todo)
    res.send(todo)
}

const updateTodo=async (req,res)=>{
    const todo=req.body
    //let oldUser=User.find({_id:user.id})
    await Todo.findByIdAndUpdate(todo._id,todo)
    res.send(todo)
}

const deleteTodo=async (req,res)=>{
    const todo=req.body
    //let oldUser=User.find({_id:user.id})
    await Todo.findByIdAndDelete(todo._id)
    res.send(todo)
}

module.exports={getTodos, createTodo,getTodo,updateTodo,deleteTodo}