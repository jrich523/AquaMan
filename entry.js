
console.log('loading')
var cfg = require('./deviceconfig')


var DeviceManager = require('./devicemanager')
DM = new DeviceManager()

DM.LoadDevices()
DM.LoadScripts()


//For the Runner

DM.Start();

var t = setInterval(function() {
  console.log("running..");
}, 1000);
setTimeout(function() {
  console.log("Stopping..");
  clearInterval(t);
  DM.Stop();
}, 3000);

