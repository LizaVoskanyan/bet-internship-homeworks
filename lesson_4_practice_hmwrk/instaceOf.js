(function() {
    function instanceOf(obj, type) {
        return type.prototype.isPrototypeOf(obj);
    }
})();