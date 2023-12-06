let fs=require("fs");

function fn(err,data){
    if(err) console.log("File Not found")
    else{
        let users=JSON.parse(data)
        console.log(users)
        users.forEach(u=>{
            fs.writeFile("./"+u.id+".json",JSON.stringify(u),(err)=>{
                if(err) console.log(err);
            })
        }
        )
    } 
}    

//fs.readFile("./users.json","utf-8",fn);


console.log("Start ....");

let str=`[{
    "id":2003,
    "name":"Aya",
    "score":1321
}]`
fn(null,str)

console.log("......End");
