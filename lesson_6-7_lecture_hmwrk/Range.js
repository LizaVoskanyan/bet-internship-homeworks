(function() {
  'use strict';
    function Range(from, to) {
        this.from = from;
        this. to = to;
        Range.includes= function(range, x) {
            return range.from <= x && x <= range.to;
        };
        if(arguments.length == 1) {
            this.from = arguments[0].from;
            this.to = arguments[0].to;
        }
    }
    Range.prototype = {
        includes: function(x) { return this.from <= x && x <= this.to; },
        
        foreach: function(f) {
            for(var x = Math.ceil(this.from); x <= this.to; x++) {
                f(x);
            }
        },
        
        len: function() {
          return this.to-this.from;
        },
        
        gt: function(range) {
            return this.len() > range.len();
        },
        
        lt: function(range) {
            return this.len() < range.len();
        },
        
        gte: function(range) {
            return this.len() > range.len() && (this.from == range.from || this.to == range.to);
        },
        
        lte: function(range) {
            return this.len() < range.len() && (this.from == range.from || this.to == range.to);
        },
        
        eq: function(range) {
            return this.len() == range.len();
        },
        
        compare: function(range, callback) {
            if(arguments.length == 1) {
                if(this.gt(range)) {
                    return 1;
                }
                if(this.lt(range)) {
                    return -1;
                }
                if(this.eq(range)) {
                    return 0;
                }
            }
            if(arguments.lemngth == 2){
                return this.callback(range);
            }
        },
    };
})();