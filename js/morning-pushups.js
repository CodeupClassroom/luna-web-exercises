"use strict";

(function(){
    function seven() {
        return 7;
    }

    // console.log(seven());

    function isFactor(x,y) {
        if (isNaN(x) || isNaN(y) || typeof (x + y) !== "number") {
            return false;
        } else {
            return x % y === 0;
        }
    }

    console.log(isFactor(21,3), isFactor(3,2), isFactor(NaN, 5), isFactor(88, 'sunshine'))
})();