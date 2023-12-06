console.log("Start Module")
let add=(a,b)=> a+b

let mult=(a,b)=>a*b

let randAge=()=> Math.floor(Math.random()*100+1)
let v=randAge()*2
module.exports={add,randAge,mult,v}

console.log("End Module")