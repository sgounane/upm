const User=require("../models/users.js")
const bcrypt = require('bcrypt');

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
    console.log(data)
    //let oldUser=User.find({_id:user.id})
    const user=await User.find({email:data.email})
    console.log(user)
    bcrypt.compare(data.password,user.password,(err,result)=>{
        if(err) console.log(err)
        console.log(result)
    })
    
    res.send(user)
}

module.exports={getUsers, createUser,getUser,updateUser,deleteUser,login}