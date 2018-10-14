module.exports =  class Output {
    constructor(name,pin,type){
        this.name=name;
        this.pin=pin;
        this.type=type;
        this._value=null;
    }
    get state() {
        return this._value;
    }
    set state(v) {
        if(v != this._value){
            if(v){
                
                console.log(this.name + ': state Set high')
                this._value = true
                //bonescript: set high
                
            }
            else{
                console.log(this.name + ': state Set low')
                this._value = false
                //bonescript: low
            }
        }
    }
}
