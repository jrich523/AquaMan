var b = require('bonescript');

module.exports =  class Input {
    constructor(name,cfg){
        this.name=name;
        //todo: validate cfg
        this.pin=cfg.pin;
        this.value=null;
        this._timer = null
        
        b.pinMode(this.pin,b.INPUT)
        b.attachInterrupt(this.pin, true, b.CHANGE, (x) =>{
            if(x.value != this.value) {
                this.value = x.value
                console.log(this.name + ': switch state updated to ' + this.value)
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
