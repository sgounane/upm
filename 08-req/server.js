const http=require("http");
const url=require("url")
const fs=require("fs")

function requestHandler(req,res){
    res.setHeader("Content-Type","text/html")
    let uri=url.parse(req.url).pathname
    console.log(uri)
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
server.listen(3300)