function arrayToString(array, func) {
        return func(array);
}
console.log(arrayToString([1,2,3,4],function(value){ return value.join('*');}));