let fs=require("fs");

console.log("Start....")
let str=fs.readFileSync("./users.json","utf-8");
console.log(str)
console.log("......End");