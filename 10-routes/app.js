const express = require("express")

const app=express()

app.use(express.static("./public"))

app.get("/articles",(req,res)=>{
    res.send("Liste des Articles")
})
app.get("/articles/new",(req, res)=>{
    res.send(`Nouvel Article .... `)
})

app.get("/articles/:id",(req, res)=>{
    res.send(`Artile num : ${req.params.id}`)
})



app.use((req,res)=>{
    res.status(404).send("<h1>Page Not Found</h1>")
})

app.listen(3000,()=>console.log("lestning on 3000"));

