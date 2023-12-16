const http=require("http");
const url=require("url")
const fs=require("fs")

function requestHandler(req,res){
    //res.setHeader("Content-Type","text/html")
    let u=url.parse(req.url)
    let uri=u.pathname
    let ext=uri.split(".")[1]
    switch(ext){
        case "html":  res.setHeader("Content-Type","text/html"); break;
        case "css":  res.setHeader("Content-Type","text/css");
    }
    console.log(ext)
    fs.readFile("."+uri,"utf-8",(err,data)=>{
        if(err){
            res.writeHead(404);
            return res.end("<h1>Page Not Found</h1>")
        }
        res.write(data)
        res.end()
    })

  
   
}
const server=http.createServer(requestHandler);
server.listen(3300, ()=> console.log("Server listening on port 3300"))