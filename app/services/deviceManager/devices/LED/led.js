module.exports = function(name,pin){
    var config = require('../../../../config/deviceconfig.json')
    var adapter = require('../../adapters')(config.platform);

    function LED(name,pin) {
        this.name = name
        this.pin = pin
        this.type = 'LED' //todo: remove this
        this.output = new adapter.output(pin)

        this.toggle = (function() {
            output.value = !output.value
        })
    }

    LED.prototype.toggle = function(){
        this.value
    }

    return new LED(name,pin)
}