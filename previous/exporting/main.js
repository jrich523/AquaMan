
//singleton
var obj1 = require('./object')
obj1.count() //1
var obj2 = require('./object')
obj2.count() //2
obj1.count() //3


var person = require('./newobject')('adam','smith')
person.db ='1/1/2000'
person.db // 1/1/2000
person.age() //18
person.greet('john') //hello john, im adam smith
