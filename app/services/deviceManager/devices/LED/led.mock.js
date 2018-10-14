var Output = require('../output.mock');

module.exports = class LED extends Output {
    constructor(name,pin){
        super(name,pin,'LED')

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