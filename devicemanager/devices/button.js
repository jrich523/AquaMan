var Input = require('./input');
console.log('loading button')

module.exports = class Button extends Input {
    constructor(name,pin){
        super(name,pin)
        
        this.On = false // what the end user will use
                        //maybe expose a subscription?
                        //will need to see what that means in the runner
    }
}