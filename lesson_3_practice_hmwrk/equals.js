(function () {
    'use strict';
    function equals(arg1, arg2) {
        if(arg1 == arg2) {
            return true;
        }
        for(var i in arg1) {
            if(arg1[i] !== arg2[i]) {
                return false;
            }
        }
        for(var i in arg2) {
            if(arg1[i] !== arg2[i]) {
                return false;
            }
        }
        return true;
    }
})();