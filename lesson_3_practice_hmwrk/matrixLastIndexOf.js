(function () {
    'use strict';
    function matrixLastIndexOf(matrix, item) {
        for(var i = matrix.length - 1 ; i >= 0; i--) {
            for(var j = matrix[i].length -1 ; j >= 0; j--) {
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