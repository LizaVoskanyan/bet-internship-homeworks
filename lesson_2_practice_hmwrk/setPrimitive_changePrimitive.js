(function() {
    var valueOf = function() {
        return this.primitive; // я не поняла зачем мы ввели случайность 
    }
    window.setPrimitive = function(obj, primitive) {
        obj["primitive"] = primitive;
        obj.valueOf = valueOf;
    }
    window.changePrimitive = function(obj, primitive) {
        obj.valueOf = valueOf;
    }
})();
