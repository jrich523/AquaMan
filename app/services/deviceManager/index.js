
module.exports = (function() {

    class DeviceManager {
        constructor(){
            this.isLoaded = false;
            this.Devices = {};
            this.Configuration = require('../../config/deviceconfig.json')
            this.DeviceLibrary = require('./devices')

    
            //this.LoadConfig()
    
        }
        
        LoadDevices(){
            //todo: add a default state? or figure out how to tell the current state?
            var d = this.Configuration.devices
            d.forEach((i) => {
                this._NewDevice(i)
            })
            this.isLoaded = true;
        }

        GetDeviceLibrary(){
            if(!this.isLoaded){this.LoadDevices()}
            return this.DeviceLibrary
        }
        
        //private, probably
        _NewDevice(data){
            this.Devices[data.name] = new this.DeviceLibrary[data.type](data.name,data.pin)
        }
    
    }

    var dm = new DeviceManager()
    dm.LoadDevices()
    return dm

}());