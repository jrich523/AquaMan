var Adapter = require('../../adapters');

module.exports = function(name,pin){
    

    let writer = Adapter.Write(name,pin)
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

    return {name,pin,type,state,on,off,toggle}
}