var b = require('bonescript');

module.exports =  class Input {
    constructor(name,pin){
        this.name=name;
        this.pin=pin;
        this._value=null;
        this._timer = null
        
        b.pinMode(this.pin,b.INPUT)
        b.attachInterrupt(this.pin, true, b.CHANGE, (x) =>{
            if(x.value != this._value) {
                this._value = x.value
                console.log(this.name + ': switch state updated to ' + this._value)
            }
        })
        /*
        this._timer = setInterval( ()=> {
            this._value = !this.value
            console.log('input _value updated')
        }, 1000)
        */
    }

    stop() {
        clearInterval(this._timer)
    }
}
