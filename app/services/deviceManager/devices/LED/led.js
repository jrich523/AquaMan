var b = require('bonescript')
var Output = require('../output')

module.exports = class LED extends Output {
    constructor(name,pin){
        super(name,pin)
        this.value = false;

        this.off() //default to off
    }

    
    toggle() {
        this.value = !this.value;
    }

    off() {
        this.value = false
    }

    on() {
        this.value = true
    }
    
}