// mocha tests
var times = require('./build'),
    __should = require('should');


describe('times', function() {
    it('should run the callback n times', function() {
        var ctr = 0;
        times(5, function() {
            ctr++;
        });
        (ctr).should.equal(5);
    });

    it('should return an array of given length', function() {
        var arr = times(5);
        arr.length.should.equal(5);
    });

    it('should iterate with index as first arg in callback', function() {
        var index = 0;
        times(5, function(i) {
            i.should.equal(index);
            index++;
        });
        index.should.equal(5);
    });

    it('should aggregate all returned values in said array', function() {
        var arr = times(5, function(i) {
            return i * 2;
        });
        arr.should.eql([0, 2, 4, 6, 8]);
    });

    it('should iterate over an array, with array element as second arg in callback', function() {
        var arr = [3, 6, 9, 12, 15];
        var index = 0;
        times(arr, function(i, el) {
            el.should.eql(arr[index]);
            index++;
        });
        index.should.equal(5);
    });

    it('should invoke named function, when string is passed as second param', function(){
        var ctr = 0;
        var arr = times(5, function(i){
            return {
                fn: function(){
                    ctr++;
                }
            }
        });
        times(arr, 'fn');
        ctr.should.equal(5);

    });

    it('should pass in rest of arguments to invoke', function(){
        var arr = times(5, function(i){
            return {
                fn: function(one, two, three){
                    one.should.eql(1);
                    two.should.eql(2);
                    three.should.eql(3);
                }
            }
        });
        times(arr, 'fn', 1, 2, 3);
    });

});