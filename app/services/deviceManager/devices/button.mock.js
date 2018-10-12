var Input = require('./input.mock');

module.exports = class Button extends Input {
    constructor(name,pin){
        super(name,pin)
    }

    get state() {
        return Boolean(this._value)
    }
}