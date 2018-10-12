
//basic method
/*
var number = 0

function dm(){
    this.name = 'dm name'
}

dm.prototype.printname = function printname(){
    number++;
    console.log(this.name + " " + number);
}

var obj = new dm()

module.exports = obj

*/

// iife method

module.exports = (function(){
var number = 0
function dm(){
    this.name = 'dm name'
}

dm.prototype.printname = function printname(){
    number++;
    console.log(this.name + " " + number);
}

return new dm()

}())