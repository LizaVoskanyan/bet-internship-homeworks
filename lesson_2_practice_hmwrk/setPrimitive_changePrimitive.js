(function(){
    window.setPrimitive = function(obj , primitive){
        obj.valueOf = function(){
            return primitive;
        }
    }
    window.changePrimitive = function(obj , primitive){
        obj.valueOf = function(){
            return primitive;
        }
    }
})();
var a = {};
setPrimitive(a, 4);
a.valueOf(); // should return 4
changePrimitive(a, 'hello');
a.valueOf(); // should return 'hello'