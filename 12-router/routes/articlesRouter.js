const express=require("express")
const router=express.Router();

let {articles}=require("../db.json")

router.get("/",(req,res)=>{
    res.status(200).send({
        status:"success",
        data:articles
    })
});

router.get("/:id",(req,res)=>{
    const article=articles.find(a=>a.id==req.params.id);
    if(article){
        res.status(200).send({
            status:"success",
            data:article
        })
    }
    else res.status(404).send({
        status:"error",
        message:`Article id: ${req.params.id} Not Found`
    })
});

router.post("/",(req,res)=>{
    console.log(req.body)
    const lastid=articles[articles.length-1].id+1
    // const titre=req.body.titre;
    // const user_id=req.body.user_id;
    // const content=req.body.content;

    const  {titre, user_id, content} = req.body
    if(!titre || !user_id|| !content) res.status(401).send({
        status:"error",
        message:"Invalid inputs"
    })
    else{
        articles.push({id:lastid+1, ...req.body})
        res.status(201).send({
            status:"success",
            data:req.body
        })
    }
});

router.delete("/:id",(req,res)=>{
    const art=articles.find(a=>a.id==req.params.id)
    if(!art) res.status(404).send({
        status:"error",
        message: "No article to delete"
    })
    else{
        articles=articles.filter(a=>a.id!=req.params.id)
    }
}
);

module.exports=router