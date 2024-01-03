const express = require("express")
const path=require("path")

const app=express()

app.use(express.static(path.join(__dirname,"public")))

app.use((req,res)=>{
    res.status(404).send("<h1>Page Not Found</h1>")
})

app.listen(3000,()=>console.log("lestning on 3000"));

