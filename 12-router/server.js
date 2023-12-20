
const express=require("express")
const usersRouter=require("./userRouter")

const app=express();

//middlewares
app.use(express.static("./public"));
//app.use(express.json());
app.use(express.urlencoded({extended:true}))

//les routes
app.get("/",(req,res)=>{
    res.status(200).send({
        "status":"success", 
        data:{
            "message":"Welcom to my api"
        }
    });
})
app.use("/users",usersRouter)

app.use((req,res)=>{
    res.status(404).send(
        {
            status:"Error",
            message:`Route not found`
        }
    )
})
//listening to clients
app.listen(3000,()=>{console.log("On port 3000")})