var Adapter = require('../../adapters');

module.exports = (name,cfg) => {

    let reader = Adapter.Read(name,cfg)
    const type = "Button"
    const state = () => { 
        const rtn = reader.get();
        return rtn;
    }
    return { name,cfg,type,state}
}