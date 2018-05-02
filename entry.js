var DeviceManager = require('./devicemanager')
var DM = new DeviceManager()

DM.LoadDevices()
DM.LoadScripts()

//For the Runner

DM.Start();

//todo: this is garbage, make it useful

var t = setInterval(function() {
}, 1000);
setTimeout(function() {
  clearInterval(t);
  DM.Stop();
}, 30000); //running for 30 seconds, will have to manually kill after.

