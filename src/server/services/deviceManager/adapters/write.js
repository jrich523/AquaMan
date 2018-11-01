module.exports = (platform) => {

    const createAdapter = require(platform);

    return function (name, cfg) {

        const adapter = createAdapter.Write(name, cfg)
        let lastUpdate = adapter.lastUpdate
        const get = adapter.get

        const off = function () {
            adapter.off()
        }
        const on = function () {
            adapter.on()
        }
        const toggle = function () {
            adapter.toggle()
        }


        return { name, cfg, on, off, toggle, lastUpdate, get }
    }
}