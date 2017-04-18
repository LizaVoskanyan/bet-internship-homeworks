(function() {
    var calculator = {
        addition: function(a, b) {
            return a + b;
        },
        multiplication: function(a, b) {
            return a * b;
        },
        subtraction: function(a, b) {
            return a - b;
        },
        division: function(a, b) {
            return a / b;
        }
    };

    function fib(n) {
        return n <= 1 ? n : calculator.addition(fib(n - 1), fib(n - 2));
    }

    function arithmeticalMean(n) {
        var sum = 0;

        for (var i = 0; i <= n; i++) {
            sum = calculator.addition(sum, fib(i));
        }
        var arithmeticalMean = calculator.division(sum, n);
        return arithmeticalMean;
    }



    console.log(arithmeticalMean(5));

})();
