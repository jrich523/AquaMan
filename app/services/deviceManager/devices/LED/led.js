var b = require('bonescript')
var Output = require('../output')

module.exports = class LED extends Output {
    constructor(name,pin){
        super(name,pin)
        this._value = false;

        this.off() //default to off
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