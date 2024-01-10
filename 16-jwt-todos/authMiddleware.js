const jwt=require("jsonwebtoken")
function auth(req,res,next){
    const auth=req.headers["authorization"]
    const token=auth.split(" ")[1];
    try{
        const data=jwt.verify(token,process.env.SECRET)
        req.data=data
        next();
        }catch(e){
            res.send({error: "Not Authorized"})
        }
    
}

module.exports=auth