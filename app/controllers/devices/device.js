module.exports = function(){

    var dm = require('../../services/deviceManager')

    function routeHandler() {
    }

    function get(req, res) {

        var info = Object.entries(dm.Devices).map(function(device){
            console.log(device)
            return { 'name': device[1].name , 'type' : device, "state": device[1].state}
        });

        res.status(200).json(info);
    }

    function post(req, res){
        var body = req.body

        res.status(200).json(body)
    }

    function put(req, res){
        res.status(200).json({status:"put not implemented"})
    }

    function del(req,res){
        res.status(200).json({status:"del not implemented"})
    }

    routeHandler.prototype = {
    get: get,
    post: post,
    put: put,
    delete: del
    };

    return new routeHandler();

}();
