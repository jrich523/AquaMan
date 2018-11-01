module.exports = (platform) => {

    const createAdapter = require(platform)

    return function (name, cfg) {

        let adapter = createAdapter.Read(name,cfg)
        
        return adapter
    }
}