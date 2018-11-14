var Adapter = require('../../adapters');

module.exports = function(name,cfg){
    

    let writer = Adapter.Write(name,cfg)
    const type = "LED"

    const state = () => { 
        const rtn = writer.get();
        return rtn;
    }
    const on = () =>{
        writer.on();
    }

    const off = () => {
        writer.off()
    }

    const toggle = () => {
        writer.toggle()
    }

    const lastUpdate = () => {
        return writer.lastUpdate()
    }

    return {name,cfg,type,state,on,off,toggle,lastUpdate}
}