(function() {
    'use strict';
    function getRandomInt() {
        var rand = Math.random() * 100;
        rand = Math.round(rand);
        return rand;
    }
    function getRandomMatrix(n, m) {
        var arr = [];
        for (var i = 0; i < m; i++) {
            arr[i] = [];
            for (var j = 0; j < n; j++) {
                arr[i][j] = getRandomInt();
            }
        }
        return arr;
    }
})();
