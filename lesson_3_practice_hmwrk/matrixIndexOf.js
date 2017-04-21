(function () {
    'use strict';
    function matrixIndexOf(matrix, item) {
        for(var i = 0; i < matrix.length; i++) {
            for(var j = 0; j < matrix[i].length; j++) {
                if(matrix[i][j] == item) {
                    var a={};
                    a.i = i;
                    a.j = j;
                    return a;
                }
            }
        }
    }
})();