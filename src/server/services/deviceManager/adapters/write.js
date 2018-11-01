module.exports = (platform) => {

    const createAdapter = require(platform);

    return function (name, pin) {

        const adapter = createAdapter.Write(name, pin)
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


        return { name, pin, on, off, toggle, lastUpdate, get }
    }
}