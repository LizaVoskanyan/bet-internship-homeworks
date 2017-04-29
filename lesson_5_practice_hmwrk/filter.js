(function() {
    'use strict';
    window.filter = function(array, func) {
        if(typeof callback !== 'function') {
            throw new TypeError();
        }
        var len = array.length;
        var result = [];
        for(var i = 0; i < len; i++) {
            if(i in array) {
                var current = array[i];
                if(func.call(array, current, i)) {
                    result.push(current);
                }
            }
        }
        return result;
    };
}());
