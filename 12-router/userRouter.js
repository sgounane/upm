const express=require("express")
let users=require("./db.json");
const router=express.Router();

router.get("/",(req,res)=>{
    res.status(200).send({
        status:"success",
        data:users
    })
})

router.get("/:id",(req,res)=>{
    const id=req.params.id;
    let user=users.find((u)=>u.id==id)
    if(user)
        res.status(200).send({
            status:"success",
            data:user
        });
    else res.status(404).send({status:"Error",message:`User id= ${id} not found`})
})

router.post("/",(req,res)=>{
    const lastid=users[users.length-1].id
    console.log(lastid)
    const exists=users.find(u=>u.email===req.body.email)
    if(exists) return res.send("Email used ...")
    const user={
        id:lastid+1,
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }
    users.push(user)
    res.send(user)
})

module.exports=router