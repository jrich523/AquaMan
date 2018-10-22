var Adapter = require('../../adapters');

module.exports = (name,pin) => {

    let reader = Adapter.Read(name,pin)
    const type = "Button"
    const state = () => { 
        reader.get();
    }
    return { name,pin,type,state}
}