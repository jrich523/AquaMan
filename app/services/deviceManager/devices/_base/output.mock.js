module.exports =  class Output {
    constructor(name,pin,type){
        this.name=name;
        this.pin=pin;
        this.type=type;
        this.value=null;
    }
    get state() {
        return this.value;
    }
    set state(v) {
        if(v != this.value){
            if(v){
                
                console.log(this.name + ': state Set high')
                this.value = true
                //bonescript: set high
                
            }
            else{
                console.log(this.name + ': state Set low')
                this.value = false
                //bonescript: low
            }
        }
    }
}
