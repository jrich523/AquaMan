module.exports = (function(){

    function counter () {
        this.cnt= 0
    }

    counter.prototype.count = function() {
        this.cnt++
        console.log(this.cnt)
    }

    return new counter();

}());