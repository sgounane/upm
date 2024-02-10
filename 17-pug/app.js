const express=require("express")
const path=require("path")
const app=express()

app.set("view engine", "pug")
app.set("views",path.join(__dirname,"/views"))

app.get("/",(req,res)=>{
    let data={
        user: "Amina",
        scores: [45678,455]
    }
    res.render("index",data)
})

app.listen(3000)