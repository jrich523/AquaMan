var Adapter = require('../../adapters');

module.exports = (name,pin) => {

    let reader = Adapter.Read(name,pin)
    const type = "_TEMPLATE"
    const state = () => { 
        const rtn = reader.get();
        return rtn;
    }
    return { name,pin,type,state}
}