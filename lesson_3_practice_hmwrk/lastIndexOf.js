(function () {
    'use strict';
    function lastIndexOf(array, item) {
        for(var i = array.length; i >= 0; i--) {
            if(array[i] === item) {
                return i + 1;
            }
        }
        return -1;
    }
})();
