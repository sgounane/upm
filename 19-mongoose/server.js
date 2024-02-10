const express=require("express")
const mongoose =require('mongoose')
const { createUser,getUsers, getUser,updateUser,deleteUser,login } = require("./controllers/usersController");

const{getTodos, createTodo,getTodo,updateTodo,deleteTodo} = require("./controllers/todosController");


const app=express();
app.use(express.json())

const uri="mongodb://localhost/upmdb";
(async ()=>{
   try{
       const conn=await mongoose.connect(uri)
       console.log("connected to db ....")
   }catch(err){
       console.log(err)
   }
})();

app.get("/",(req,res)=>{
    res.status(200).send({message:"Welcom to My REST API /todos for list of todos"})
})
app.get("/users",getUsers)
app.get("/users/:id",getUser)
app.post("/users",createUser)
app.post("/users/login",login)
app.put("/users",updateUser)
app.delete("/users/:id",deleteUser)


app.get("/todos",getTodos)
app.get("/todos/:id",getTodo)
app.post("/todos",createTodo)
app.put("/todos",updateTodo)
app.delete("/todos/:id",deleteTodo)




app.listen(3000,()=>console.log("On port 3000"))