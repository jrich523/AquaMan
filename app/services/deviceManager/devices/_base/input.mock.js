//var b = require('bonescript');

module.exports =  class Input {
    constructor(name,pin,type){
        this.name=name;
        this.pin=pin;
        this.type=type;
        this.value=null;
        this._timer = null;
        
        this._timer = setInterval( ()=> {
            this.value = !this.value
            //console.log('input _value updated for ' + this.name)
        }, 5000)
        
    }

    stop() {
        clearInterval(this._timer)
    }
}
