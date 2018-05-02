var DeviceManager = require('./devicemanager')
var DM = new DeviceManager()

DM.LoadDevices()
DM.LoadScripts()

//For the Runner

DM.Start();

var t = setInterval(function() {
}, 1000);
setTimeout(function() {
  clearInterval(t);
  DM.Stop();
}, 3000);

