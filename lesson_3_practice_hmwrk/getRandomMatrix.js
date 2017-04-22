(function() {
    'use strict';
    function getRandomInt() {
        return Math.round(Math.random() * 100);
    }
    function getRandomMatrix(n, m) {
        var arr = new Array();
        for (var i = 0; i < m; i++) {
            arr[i] = [];
            for (var j = 0; j < n; j++) {
                arr[i][j] = getRandomInt();
            }
        }
        return arr;
    }
})();
