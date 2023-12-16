let articles=require("./db.js")
const express =require("express")

const app=express()

app.use(express.static("./public"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use((req,res,next)=>{
    req.data={
        nom:"Gounane",
        date:new Date()
    }
   next()
})

app.get("/",(req,res)=>{
   res.json({articles,data:req.data})
})

app.get("/articles/:id",(req,res)=>{
    const article=articles.find(e=>e.id==req.params.id)
    console.log(article)
    if(article) res.json({status:"success", data:articles[req.params.id-1]})
    else res.json({status:"error",message:"Article Not Found"})
 })
 app.post("/articles",(req,res)=>{
    console.log(req.body)
    res.json({status:"success",data:{un:1}})
 })


app.listen(3000, ()=>console.log("Listening on port 3000"))