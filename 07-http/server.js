const http=require("http");
const url=require("url")

function requestHandler(req,res){
    res.setHeader("Content-Type","text/html")
    let u=req.url
    console.log(u)
    let uri=url.parse(u)
    let path=uri.pathname
    console.log(path)
    if(path==="/") {
        res.writeHead(200);
        res.write("<h1>Welcom !!</h1>");
        res.write("<p>Welcom message .....</p>");
    }
    else if(path==="/about") {
        res.writeHead(200);
        res.write("<h1>About us</h1>");
        res.write("<p>About us  page .....</p>");
        res.write(uri.query);
    }
    else{
        res.writeHead(404);
        res.end("<h1>Page Not Found</h1>");
    }
    res.end()
   
}

const server=http.createServer(requestHandler);
server.listen(3000)