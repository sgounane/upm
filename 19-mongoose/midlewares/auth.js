const jwt=require("jsonwebtoken")
const  auth= (req,res,next)=>{
    try{
        const token =req.headers["Authorization"]
        const email=jwt.verify(token?.split(" ")[1],process.env.SECRET)
        if(email) return next()
        res.status(401).send({Error: "Unauthorized ..."})
    }catch(e){
        res.status(401).send({Error: "Unauthorized ..."})
    }
    
    
}

module.exports= auth