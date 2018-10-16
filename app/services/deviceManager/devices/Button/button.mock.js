var Input = require('../_base/input.mock');

module.exports = class Button extends Input {
    constructor(name,pin){
        super(name,pin,'Button')
    }

    get state() {
        return Boolean(this.value)
    }
}