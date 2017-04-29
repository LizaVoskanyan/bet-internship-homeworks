(function() {
    'use strict';
    window.map = function(array, func) {
        if(typeof funct !== 'function') {
            throw new TypeError();
        }
        var result, len = array.length;
        for(var i = 0; i < len; i++) {
            if(i in array) {
                result[i] = func.call(array, array[i], i);
            }
            return result;
        }
    };
}());
