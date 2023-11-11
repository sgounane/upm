//alert("Script:Bonjour");
console.log("Debut Script1");
//(function(){
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
        console.log(tab[i]*2)
    }

    for(let e of tab){
        console.log(e)
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

    d==0?console.log("OK"):console.log("KO")

    a=2
    switch(a){
        case 2: console.log("Mardi"); break;
        case 3: console.log("Mercredi");break;
        case 4: console.log("Jeudi");break;
        case 5: console.log("Vendredi");break;
        default:console.log("Un jour");
    }

    //Fonctions
    function add(a=2,b=7){
        console.log(arguments.length)
        let c=a+b
        return c
    }
    function addbis(a=2,b=7){
        //console.log(arguments.length)
        let c=0
        for(let e of arguments){
            if(e=parseFloat(e)) c+=e
            //console.log(e)
        }
        return c
    }

    let result=addbis(3,5,6)
    //console.log(result)


    //Scoping

    let g=2

    function multiplyByG(v){
        if(v==4){
            var w=12;
            let z=14;
        }
        console.log(g, v,w)
        return g*v
    }

    multiplyByG(5);
    console.log(g)

    //Fonction anonyme

    console.log(g,a,b)

//})()

console.log("Fin Script1")