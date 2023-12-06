class RandAge{
    constructor(min, max){
        this.min=min,
        this.max=max
    }
    getAge(){
        return Math.floor(Math.random()*(this.max-this.min)+this.min)
    }
    
}
module.exports=RandAge