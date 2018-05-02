//var b = require('bonescript')

module.exports = class LED {
    constructor(name,pin){
        this.name = name;
        this.pin = pin;
        this._state = false;

        //b.pinMode(this.pin,b.OUTPUT)

        this.off() //default to off
    }

    get state() {
        return this._state;
    }
    set state(v) {
        if(v){
            console.log('state Set high')
            this._state = true
            //bonescript: set high
            //b.digialWrite(this.pin,b.HIGH)
            
        }
        else{
            console.log('state Set low')
            this._state = false
            //bonescript: low
            //b.digialWrite(this.pin,b.LOW)
        }
    }
    toggle() {
        this.state = !this.state;
    }

    off() {
        this.state = false
    }

    on() {
        this.state = true
    }
    
}