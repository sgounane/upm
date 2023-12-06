//vanilla js

// function add(a,b){
//     return a+b
// }

//ES6

// let add= (a,b)=>{
//     return a+b
// }

let add = (a,b)=>a+b

let e={
    id:23,
    nom:  "said",
    age:22
}

//vanilla js

// let nom=e.nom
// let age=e.age
//console.log(nom, age)

//ES6

let {nom, age}=e
console.log(nom,age)

let multiplyBy= (n)=>{
    let a=2
    let multiply=(m)=>{
        return m*n+a
    }
    return multiply
}
let m6=multiplyBy(6)
let res=m6(4)

let m5=multiplyBy(6)
res=m5(4)

//fog(x) e(log(x))
 let expo=(x)=> Math.exp(x)
 let loga=(x)=>Math.log(x)
 let fog=(f)=> (x)=>f(x)

 let f1=fog(expo)