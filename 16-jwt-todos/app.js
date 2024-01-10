const express=require("express")
const jwt=require("jsonwebtoken")
const auth=require("./authMiddleware")
require("dotenv").config();
const app=express()
app.use(express.json())

console.log(auth)
console.log(process.env)
const todos=[
    {
        id:1,
        userId:324,
        title:"Learn react",
        completed:false
    },
    {
        id:2,
        userId:324,
        title:"Learn nodejs",
        completed:true
    },
]
app.get("/",(req,res)=>{
    res.send("welcom to my api use /login")
})
app.get("/todos",auth,(req,res)=>{
    res.send(todos)
})
app.post("/login",(req,res)=>{
    if(req.body.user){
        const token=jwt.sign(
            {user:req.body.user, score:req.body.score},
            process.env.SECRET,
            {expiresIn:'1h'}
            )
        res.send(token)
    }
    else res.send("Need Login and Password ")
    

})

app.listen(process.env.PORT)