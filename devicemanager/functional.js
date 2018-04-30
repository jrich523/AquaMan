// Private Var
var timer = null;
// Private Methods

//public Properties
exports.isLoaded = false;

// Public Methods
exports.start = function(){
    console.log('starting timer')
    timer = setInterval( function() {
        console.log('timer callback')
        exports.isLoaded = !exports.isLoaded;
    },1000)
};

exports.stop = function(){
    console.log('stopping timer')
    clearInterval(timer)
};
