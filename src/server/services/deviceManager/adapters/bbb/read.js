var b = require('bonescript');

module.exports =  function (name,cfg) {
    //todo: validate cfg

     let value=null;
     let lastUpdate = new Date();
    
    b.pinMode(cfg.pin,b.INPUT)
    b.attachInterrupt(cfg.pin, true, b.CHANGE, (x) =>{
        if(x.value != value) {
            value = x.value
            lastUpdate = new Date();
            console.log(this.name + ': switch state updated to ' + this.value)
        }
    })

    const get = () => {
        return value
    }
    
    return { name, cfg, lastUpdate, get }
}

