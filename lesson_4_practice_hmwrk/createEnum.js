(function() {
    function createEnum(arr) {
        var en = {};
        var count = 0;
        for (var key in en) {
            Object.defineProperties(en, 'key', {
                writable: false,
                enumerable: true,
                configurable: false
            });
        }
        for (var i = 0; i < arr.length; i++) {
            var current = arr[i];
            if (typeof current === "string") {
                en[current] = count;
                count++;
            }
            if (typeof current === "object") {
                for (var key in current) {
                    if ('value' in current) {
                        count = current.value;
                    }
                    en[current.name] = count;
                    count++;
                }
            }
        }
        return en;
    }
})();