console.log('creating device library')
var deviceLibrary = {
    button: require('./button'),
    LED: require('./led')
}


module.exports = deviceLibrary