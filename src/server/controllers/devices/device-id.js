module.exports = function () {

    var dm = require('../../services/deviceManager')

    function routeHandler() {
    }

    function get(req, res) {

        const id = req.params.id

        const d = (dm.Devices[id])
        const state = d.state();
        const dt = d.lastUpdate();
        if (d === undefined) {
            res.status(404).send('Device not found')
        }
        else
        {
            res.status(200).json({
                name: d.name,
                pin: d.cfg.pin,
                state: state,
                lastUpdate: dt
            });
        }
    }

    function post(req, res) {
        var body = req.body

        res.status(200).json(body)
    }

    function put(req, res) {
        res.status(200).json({ status: "put ok" })
    }

    function del(req, res) {
        res.status(200).json({ status: "del ok" })
    }

    routeHandler.prototype = {
        get: get,
        post: post,
        put: put,
        delete: del
    };

    return new routeHandler();

}();
