var dm = require('../../services/deviceManager')

function device() {
}

function get(req, res, next) {
  console.log(dm.Devices)
  
  res.status(200).json("ok");
}

device.prototype = {
  get: get
};

var device = new device();

module.exports = device;
