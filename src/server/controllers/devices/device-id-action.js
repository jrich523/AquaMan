module.exports = function(){

    var dm = require('../../services/deviceManager')

    function routeHandler() {
    }

    function get(req, res) {
        //const id = req.params.id
        const action = req.params.action
        //show available actions
        res.status(200).json( { status: "OK", Action: action });
    }

    function post(req, res){
        //var body = req.body
        const id = req.params.id
        const action = req.params.action

        let device = dm.Devices[id]
        device[action]()
        res.status(200).json({status: 'complete'})
    }

    function put(req, res){
        res.status(200).json({status:"put ok"})
    }

    function del(req,res){
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
