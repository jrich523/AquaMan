var b = require('bonescript');

module.exports =  function (name,cfg){
        let value=null;
        let updateStamp = new Date()
        b.pinMode(this.pin,b.OUTPUT)

    
    let get = () => {
        return value;
    }

    let on = () => {
        // dont bother checking, just set incase
        console.log('Going HIGH on ' + cfg.pin)
        b.digitalWrite(cfg.pin, b.HIGH)
        value = true
        update()
    }

    let off = () => {
        console.log('Going LOW on ' + cfg.pin)
        b.digitalWrite(cfg.pin, b.LOW)
        value = false
        update()
    }
    
    let toggle = () => {
        if(value === true) //todo: check for proper check type
            off()
        else
            on()
    }

    let lastUpdate = () => {
        return updateStamp
    }


    // private

    let update = () => {
        updateStamp = new Date()
    }

    return { name, cfg, lastUpdate, get, on, off, toggle}
}
