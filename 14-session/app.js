const express=require("express")
const session=require("express-session")

const app=express()

app.use(express.json())

app.use(session({
    secret:"Mon secret",
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:60000
    }
}));

app.get("/",(req,res)=>{
    if(req.session?.user){
        res.send(`Logged in usernam: ${req.session.user}`)
    }
    else
        res.send("Logged Out use /login to Login")
})

app.get("/logout",(req,res)=>{
    req.session.destroy();
    res.send("LOGGED OUT ")
})
app.post("/login",(req,res)=>{
    const {user, password}=req.body
    if(user){
        req.session.user=user
        res.send("Loged in ..")
    }
    else res.send("Invalid username or password")
})

app.use((req,res)=>{
    res.send("Ressource not avialable ....")
})
app.listen(3000);