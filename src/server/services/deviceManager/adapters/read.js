module.exports = (platform) => {

    const createAdapter = require(platform)

    return function (name, pin) {

        let adapter = createAdapter.Read(name,pin)
        
        return adapter
    }
}