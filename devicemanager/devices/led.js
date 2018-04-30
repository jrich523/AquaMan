//var b = require('bonescript')

module.exports = class LED {
    constructor(name,pin){
        this.name = name;
        this.pin = pin;
        this._state = false;

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
        }
        else{
            console.log('state Set low')
            this._state = false
            //bonescript: low
        }
    }
    toggle() {
        console.log('led toggle')
        this.state = !this.state;
    }

    off() {
        this.state = false
    }

    on() {
        this.state = true
    }
    
}