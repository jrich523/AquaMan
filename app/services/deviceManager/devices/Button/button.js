var Input = require('../input');

module.exports = class Button extends Input {
    constructor(name,pin){
        super(name,pin)
    }

    get state() {
        return Boolean(this.value)
    }
}