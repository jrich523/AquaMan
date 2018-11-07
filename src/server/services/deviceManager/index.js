
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
            this.Configuration.devices.forEach((i) => {
                this._NewDevice(i)
            })
            this.isLoaded = true;
        }
        
        //todo: will likely need some sort of reload to rebuild if the config has changed without starting?


        _NewDevice(data){
            this.Devices[data.name] = this.DeviceLibrary[data.type].Create(data.name,data.cfg)
        }
    
    }

    return new DeviceManager()

}());
