//Methode 1
/*


let user1={
    nom: "Gounane",
    age:21,
    score:132,
    direBonjour: function(){
        if(user.age<15)
            console.log(`${user1.nom}: HI!`)
        else
            console.log(`${user1.nom}: Bonjour!`)
    }
}
let user2={
    nom: "Mahdaoui",
    age:24,
    score:241,
    direBonjour: function(){
        if(user.age<15)
            console.log(`${user2.nom}: HI!`)
        else
            console.log(`${user2.nom}: Bonjour!`)
    }
}
console.log(typeof user1)
console.log(user1)
//console.log(user1.name)
//console.log(user1.password)
user1.password="1234"
console.log(user)

user.password="azeerrty"
console.log(user)

*/

//Methode 2
/*
function Etudiant(id,nom,age){
    this.id=1;
    this.nom=nom;
    this.age=age;
    this.direBonjour=function(){
        console.log(`Bonjour je m'appel ${this.nom} j'ai ${this.age} ans`);
        return 0;
    }
}
Etudiant.prototype.info=function(){
    console.log(
        `
        id: ${this.id}
        nom: ${this.nom}
        Age: ${this.age}
        `
    )
}
const e1=new Etudiant(4,"Said",23)
const e2=new Etudiant(5,"Mariem",33)

e1.direBonjour()
e2.direBonjour()
e1.info()
e2.info()

e1.age=12
e2.nom="Mohammed"

e1.direBonjour()
e2.direBonjour()

e1.info()
e2.info()
*/

//Methode 3
class Etudiant{
    constructor(id, nom, age){
        this.id=id;
        this.nom=nom;
        this.age=age;
        
    }
    
    direBonjour(){
        console.log(`Bonjour je m'appel ${this.nom} j'ai ${this.age} ans`);
    }
    info(){
        console.log(
            `
            id: ${this.id}
            nom: ${this.nom}
            Age: ${this.age}
            `
        )
    }
}