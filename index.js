var has = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

var isArray = Array.isArray ||
function(obj) {
    return toString.call(obj) == '[object Array]';
};

module.exports = function(n, fn) {
    // combination forloop / map. 
    // compatible with regular _.times
    // WARNING - fn is called with (index, value), not the other (regular) way around
    var times = isArray(n) ? n.length : n;
    var arr = isArray(n) ? n : [];
    var ret = [];
    if('string' === typeof fn){
        fn = (function(f){
            return function(i){
                return arr[i][f]();
            };
        }(fn));
    }

    fn = fn || function(){};

    for(var i = 0; i < times; i++) {
        ret.push(fn(i, arr[i]));
    }
    return ret;
};