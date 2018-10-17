function input() {
    
    var config = require('../../../../config/deviceconfig.json')
    var adapter = require(config.platform)

    return function(){

        this.off = function() {adapter.off()}
        this.on = function() { }
        this.toggle = function(){ } 
    }

}