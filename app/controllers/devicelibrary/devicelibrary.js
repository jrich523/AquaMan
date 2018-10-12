var dm = require('../../services/deviceManager')

function devicelibrary() {
}

function get(req, res, next) {
  
  var lib = dm.GetDeviceLibrary()
  console.log(Object.getOwnPropertyNames(lib))
  
  res.status(200).json(Object.getOwnPropertyNames(lib));
}

devicelibrary.prototype = {
  get: get
};

var devicelibrary = new devicelibrary();

module.exports = devicelibrary;
