define(function(require) {
    'use strict';

    var Q = require('q');

    function Step3(di) {
        this.di = di;
    }

    Step3.newInstance = function(di) {
        di.Q = di.Q || Q;
        return new Step3(di);
    };

    Step3.prototype.initModel = function() {
        return this.di.Q({});
    };

    return Step3;
});
