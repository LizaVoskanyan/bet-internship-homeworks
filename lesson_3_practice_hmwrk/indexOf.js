(function () {
    'use strict';
    function indexOf(array, item) {
        for(var i = 0; i <= array.length; i++) {
            if(array[i] === item) {
                return i + 1;
            }
        }
        return -1;
    }
})();
