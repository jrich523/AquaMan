

var o1 = require('./data')

o1.printname()
o1.name = "test"

var o2 = require('./data')
o2.printname()
o2.name = "hello"

o1.printname()