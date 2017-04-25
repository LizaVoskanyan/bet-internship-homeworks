(function() {
    function getClassName(obj) {
      if (obj === null) {
        return "null";
      }
      if (obj === undefined) {
        return "undefined";
      }
      else {
        return Object.prototype.toString.call(obj).slice(8, -1);
      }
    }
})();