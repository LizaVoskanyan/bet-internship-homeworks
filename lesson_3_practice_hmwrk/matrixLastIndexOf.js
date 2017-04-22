(function () {
    'use strict';
    function matrixLastIndexOf(matrix, item) {
        var a={};
        for(var i = matrix.length - 1 ; i >= 0; i--) {
            for(var j = matrix[i].length -1 ; j >= 0; j--) {
                if(matrix[i][j] === item) {
                    a.i = i + 1;
                    a.j = j + 1;
                    return a;
                }
            }
         }
         return -1;
    }
})();
