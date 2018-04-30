
module.exports = class DeviceManager {
    constructor(){
        this.isLoaded = false;
        this._timer= null;
        this.Devices = {};
        this.Configuration = require('../deviceconfig.json')
        this.DeviceLibrary = require('./devices')
        this.Scripts = {};

        //this.LoadConfig()

    }
    
    LoadDevices(){
        var d = this.Configuration.devices
        d.forEach((i) => {
            this._NewDevice(i)
        })

        //console.log(JSON.stringify(this.Devices))
    }
    
    //private, probably
    _NewDevice(data){
        this.Devices[data.name] = new this.DeviceLibrary[data.type](data.name,data.pin)
    }

    LoadScripts(){
        console.log('e: import scripts')

        //todo: move to file

        var data = {
            name: 'usrScript',
            script: require('../usrScript'),
            interval: 100
        }

        this._NewScript(data)
    }
    //privarte
    _NewScript(data){
        this.Scripts[data.name] = data.script
    }

    Start(){
        console.log('E: starting timer')
        
        var script = this.Scripts['usrScript']
        console.log(this.Devices)
        this._timer = setInterval( () => {
            script(this.Devices)
        }, 1000)
    }

    Stop() {
        console.log('stopping timer')
        clearInterval(this._timer)
    }
}