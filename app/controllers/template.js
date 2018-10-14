module.exports = function(){

    var dm = require('../../services/deviceManager')

    function routeHandler() {
    }

    function get(req, res, next) {
        
        res.status(200).json( { status: "get ok" });
    }

    function post(req, res, next){
        var body = req.body

        res.status(200).json(body)
    }

    function put(req, res, next){
        res.status(200).json({status:"put ok"})
    }

    function del(req,res, next){
        res.status(200).json({status:"del ok"})
    }

    routeHandler.prototype = {
    get: get,
    post: post,
    put: put,
    delete: del
    };

    return new routeHandler();

}();