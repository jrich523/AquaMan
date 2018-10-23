var dm = require('../../services/deviceManager')

function devicelibrary() {
}

function get(req, res, next) {
  
  let lib = dm.DeviceLibrary
  console.log(Object.getOwnPropertyNames(lib))
  
  res.status(200).json(Object.getOwnPropertyNames(lib));
}

devicelibrary.prototype = {
  get: get
};

var devicelibrary = new devicelibrary();

module.exports = devicelibrary;
