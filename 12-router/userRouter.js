const express=require("express")
let data=require("./db.json");
const router=express.Router();

let users=data.users;
let articles=data.articles;
router.get("/",(req,res)=>{  //GET http://localhost:3000/users/
    res.status(200).send({
        status:"success",
        data:users
    })
})

router.get("/:id",(req,res)=>{   //GET http://localhost:3000/users/:id  
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
    if(exists) return res.send({status:"Error",message:`User email= ${u.email} exists`})
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