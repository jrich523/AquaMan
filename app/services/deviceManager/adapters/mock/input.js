module.exports = function(){
    return function(name,pin)
    {
        this.pin = pin
        this.name = name
        var value = false //low
        //set mode input
        //default low

        this.on = function(){
            value = true;
        }

        this.off = function(){
            value = false;
        }

        this.toggle = function(){
            value = !value
        }
    }
}
