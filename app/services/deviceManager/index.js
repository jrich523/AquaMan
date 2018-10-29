
module.exports = (function() {

    class DeviceManager {
        constructor(){
            this.isLoaded = false;
            this.Devices = {};
            this.Configuration = require('../../config/deviceconfig.json')
            this.DeviceLibrary = require('./devices')
            this.LoadDevices()
    
        }
        
        LoadDevices(){
            //todo: add a default state? or figure out how to tell the current state?
            var d = this.Configuration.devices
            d.forEach((i) => {
                this._NewDevice(i)
            })
            this.isLoaded = true;
        }
        
        _NewDevice(data){
                this.Devices[data.name] = this.DeviceLibrary[data.type].Create(data.name,data.pin)
        }
    
    }

    return new DeviceManager()

}());
