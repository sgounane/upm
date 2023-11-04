//alert("Script:Bonjour");

let a
console.log(typeof a)
console.log("Bonjour: ",a)

a="said"
console.log(typeof a)
console.log("Bonjour: ",a)

a=null
console.log(typeof a)
console.log("Bonjour: ",a)

a=23
console.log(typeof a)
console.log("Bonjour: ",a)

a=true
console.log(typeof a)
console.log("Bonjour: ",a)

let nom="Gounane"
let prenom="Said"
const age=12
//age=23

//let str="Bonjour "+nom+" "+prenom+ "!"
let str=`Bonjour ${nom} ${prenom} age: ${age+10}!`
console.log(str)


let tab=[1,4,7,8]
for(let i=0;i<4;i++){
    console.log(i*2)
}

//console.log("i:", i)


let c=2
let b=""
let d;
// if(d){
//     console.log("OK")
// }
// else{
//     console.log("KO")
// }

d?console.log("OK"):console.log("KO")