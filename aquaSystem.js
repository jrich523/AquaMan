var b = require('bonescript');
var dir = require('read-dir-files');

var deviceCfg;


function readDeviceConfig(){
    var filePath = "./devices.json";
    b.readTextFile(filePath, processDeviceConfig);
    
}

function processDeviceConfig(x) {
    
    console.log("Device config read");
    deviceCfg = JSON.parse(x.data);
    
}

function loadDeviceLibrary(){
    var devicePath = './Devices'
    
    var files = dir.list(devicePath)
    console.log(files)
    
}

function startup() {
    console.log("Starting System");
    readDeviceConfig();
    loadDeviceLibrary();
    
}

// main entry runner

startup();