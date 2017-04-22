(function () {
    'use strict';
    function matrixIndexOf(matrix, item) {
        var a = {};
        for(var i = 0; i < matrix.length; i++) {
            for(var j = 0; j < matrix[i].length; j++) {
                if(matrix[i][j] == item) {
                    a.i = i + 1;
                    a.j = j + 1;
                    return a;
                }
            }
        }
        return -1;
    }
})();
