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
                var result = callback.call(array, current, i);
                if(!result){
                    return false;
                }
            }
            i++;
        }
        return true;
    };
}());