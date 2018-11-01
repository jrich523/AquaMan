var dm = require('../../services/deviceManager')

function deviceLibrary() {
}

function get(req, res) {
  
  let lib = dm.DeviceLibrary
  
  res.status(200).json(Object.getOwnPropertyNames(lib));
}

deviceLibrary.prototype = {
  get: get
};

var devicelibrary = new deviceLibrary();

module.exports = devicelibrary;
