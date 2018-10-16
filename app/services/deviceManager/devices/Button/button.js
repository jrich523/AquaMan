var Input = require('../_base/input');

module.exports = class Button extends Input {
    constructor(name,pin){
        super(name,pin)
    }

    get state() {
        return Boolean(this.value)
    }
}