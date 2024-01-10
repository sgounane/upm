const express=require("express")
const jwt=require("jsonwebtoken")
require("dotenv").config();
//const secret=require("crypto").randomBytes(16).toString("hex")
//console.log(secret)
const app=express()
app.use(express.json())

console.log(process.env)

app.get("/",(req,res)=>{
    const auth=req.headers["authorization"]
    const token=auth.split(" ")[1];
    const data=jwt.verify(token,process.env.SECRET)
    res.send(data)
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