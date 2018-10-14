var b = require('bonescript');

module.exports =  class Output {
    constructor(name,pin){
        this.name=name;
        this.pin=pin;
        this._value=null;

        b.pinMode(this.pin,b.OUTPUT)
    
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
                b.digitalWrite(this.pin,b.HIGH)
                
            }
            else{
                console.log(this.name + ': state Set low')
                this._value = false
                //bonescript: low
                b.digitalWrite(this.pin,b.LOW)
            }
        }
    }
}
