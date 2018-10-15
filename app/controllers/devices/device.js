module.exports = function(){

    var dm = require('../../services/deviceManager')

    function routeHandler() {
    }

    function get(req, res, next) {
        
        var info = []
        Object.entries(dm.Devices).forEach(function(obj){ 
            info.push({ 'name': obj[1].name , 'type' : obj[1].type});
        });
    
        res.status(200).json(info);
    }

    function post(req, res, next){
        var body = req.body

        res.status(200).json(body)
    }

    function put(req, res, next){
        res.status(200).json({status:"put not implemented"})
    }

    function del(req,res, next){
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
