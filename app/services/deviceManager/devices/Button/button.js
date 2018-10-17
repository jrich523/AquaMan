var Input = require('../../adapters/mock/input');

module.exports = class Button extends Input {
    constructor(name,pin){
        super(name,pin,'Button')
    }

    get state() {
        return Boolean(this.value)
    }
}