let fs=require("fs");
console.log("Start ....");

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

fs.readFile("./users.json","utf-8",fn);


console.log("......End");
