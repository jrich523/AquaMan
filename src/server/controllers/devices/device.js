module.exports = function(){

    var dm = require('../../services/deviceManager')

    function routeHandler() {
    }

    function get(req, res) {

        var info = Object.entries(dm.Devices).map(function(device){
            const rtn = device[1].state();
            return  { 'name' : device[1].name, 
                        'type' : device[1].type,
                        'data' : rtn
                    }
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
