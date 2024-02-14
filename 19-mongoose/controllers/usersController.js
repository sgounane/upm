const User=require("../models/users.js")
const bcrypt = require('bcrypt');
const jwt  =require("jsonwebtoken")

const getUsers=async (req,res)=>{
    const users=await User.find({})
    res.send(users)
}

const getUser=async (req,res)=>{
    const id=req.params.id
    const user=await User.findById(id)
    res.send(user)
}

const createUser=async (req,res)=>{
    const user=req.body
    bcrypt.hash(user.password, 10, function(err, hash) {
        user.password=hash
        User.create(user)
    });
    
    res.send(user)
}

const updateUser=async (req,res)=>{
    const user=req.body
    //let oldUser=User.find({_id:user.id})
    await User.findByIdAndUpdate(user._id,user)
    res.send(user)
}

const deleteUser=async (req,res)=>{
    const user=req.body
    //let oldUser=User.find({_id:user.id})
    await User.findByIdAndDelete(user._id,user)
    res.send(user)
}


const login=async (req,res)=>{
    const data=req.body
    //console.log(data)
    //let oldUser=User.find({_id:user.id})
    const user=await User.findOne({email:data.email})
    console.log(user)
    const verify=await bcrypt.compare(data.password,user.password)
    console.log(verify);
    if(verify) {
        //créer et evoyer le JWT 
        const token =jwt.sign({email:data.email},process.env.SECRET)
        res.header("Autorization","bearer "+token)
        return res.send({Success: "Bingo y're logged in"})
    }
    return res.send({error: "Login or password incorrect"})
}

module.exports={getUsers, createUser,getUser,updateUser,deleteUser,login}