const express=require("express")
const PORT=3000
const app=express()

function myLogger(req,res,next){
    console.log(`Middelware:${Date()} : ${req.url}`);
    //res.send(req.url)
    next();
}
app.use(myLogger)
app.use(function(req,res){
    res.send("Hello!!!");
})
app.listen(PORT, ()=>console.log(`Running on ${PORT}`))