dm = require('../app/services/deviceManager')

var dt = Object.entries(dm.DeviceLibrary)

console.log(dt)

console.log(dt[0][1].name)