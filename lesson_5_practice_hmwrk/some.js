(function() {
    'use strict';
    window.some() = function(array, func) {
        if(typeof func !== 'function') {
            throw new TypeError();
        }
        var len = array.length;
        for(var i = 0; i < len; i++){
            if(i in array && func.call(array, array[i], i)) {
                return true;
            }
        }
        return false;
    };
}());