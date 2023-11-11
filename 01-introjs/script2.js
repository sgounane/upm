console.log("Debut Script2")
//console.log(g,a,b)

function decompt(n){
    if(n>0) {
        console.log(n)
        return decompt(n-1)
    }
}
decompt(10);

function sum(n){
    if(n>0){
        return n+sum(n-1)
    }
    return 0;
}
let s=sum(4)
console.log(s)
console.log("Fin Script2")