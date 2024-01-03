const express=require("express")
let {articles}=require("./db.json");
const PORT=3000
const app=express()

app.use(express.json());

function auth(req,res,next){
    const user=req.body.user;
    if(user==="admin") next()
    else res.status(401).send("Not Authorized")
}
app.get("/",(req,res)=>{
    res.status(200).send(articles)
})

app.post("/articles",auth,(req,res)=>{
    let {id,titre,content}=req.body;
    articles.push({id,titre,content})
    res.send({titre,content})
})
app.delete("/articles/:id",auth,(req,res)=>{
    articles=articles.filter(a=>a.id!== parseInt(req.params.id))
    res.send(articles)
})

app.use(function(req,res){
    res.send("Not Found");
})
app.listen(PORT, ()=>console.log(`Running on ${PORT}`))