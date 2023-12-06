console.log("Start ....");

setTimeout(()=>{
    console.log("Salut");
    setTimeout(()=>console.log("HI"),10000)
},0);

console.log(".....End");