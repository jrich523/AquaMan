var Output = require('../_base/output.mock');

module.exports = class LED extends Output {
    constructor(name,pin){
        super(name,pin,'LED')

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