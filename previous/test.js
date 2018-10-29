var adp = require('../app/services/deviceManager/adapters')
/*
var newr = require('../app/services/deviceManager/adapters/mock/read')
var neww = require('../app/services/deviceManager/adapters/mock/write')

var r = newr('test','pin1')
console.log(newr.name)
console.log(r.name)
console.log('------')

let w = neww('test','pin2')
console.log("mod", neww.name)
console.log("base", w.name)
*/
var r1 = adp.Read('r1','p1')
var w1 = adp.Write("w1", "p2")

//console.log(r1)
//console.log(w1)

console.log(w1.get.toString())