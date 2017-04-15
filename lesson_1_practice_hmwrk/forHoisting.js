(function() {
 var calculator
 function fib(n)
function arithmeticalMean(n)

calculator = { addition : function(a,b) { return a + b ;},
               multiplication : function(a,b) { return a * b ;},
               subtraction : function(a,b) { return a - b;},
               division : function (a,b) { return a/b;}       // i don't know about hoisting in objects yet
    };
    
     fib(n) {
      return n <= 1 ? n :calculator.addition( fib(n - 1) , fib(n - 2) );
    }
  
    arithmeticalMean(n){
        var sum = 0;
        var i 
        var arithmeticalMean

        sum = 0;
        for(i = 0 ; i <= n ; i++ ){  
          sum = calculator.addition( sum , fib(i));
        }
        arithmeticalMean = calculator.division(sum , n);
        return arithmeticalMean;
    }
    
      
    
   console.log(arithmeticalMean(5));
   
  })(); 
