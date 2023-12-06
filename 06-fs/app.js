let fs=require("fs");

/*
console.log("Start....")
let fn=(err,data)=>{
    if(err) console.log("File Not found")
    else console.log(data);
}
fs.readFile("./users.jso","utf-8",fn);
*/

fs.readFile("./users.jso","utf-8",(err,data)=>{
    if(err) console.log("File Not found")
    else console.log(data);
});

console.log("......End");