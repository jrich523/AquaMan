var config = require('../../../config/deviceconfig.json')
var platform = "./" + config.platform
//test config.platform to make sure its there

console.log('Loading Adapter: ' + config.platform)

module.exports = {
    Read: require('./read')(platform),
    Write: require('./write')(platform)
}


