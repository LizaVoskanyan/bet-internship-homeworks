(function() {
    'use strict';
    window.forEach() = function(array, callback) {
        if(typeof callback !== 'function') {
            throw new TypeError;
        }
        var i = 0;
        while(i < len) {
            var current;
            if(i in array) {
                current = array[i];
                callback.call(array, current, i);
            }
            i++;
        }
        // return undefined
    };
}());