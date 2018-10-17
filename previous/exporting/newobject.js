
function person(first,last){
    this.first = first;
    this.last = last;
    this.db;
}

person.prototype.age = function(){
    return 18;
}

person.prototype.fullname = function(){ return this.first + " " + this.last}

person.prototype.greet = function(name){
    "hello " + name + 'im ' + this.fullname
}

module.export = person