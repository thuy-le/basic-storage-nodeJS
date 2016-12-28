define(function(require) {
    'use strict';

    var Q = require('q');

    function Main(di) {
        this.di = di;
    }

    Main.newInstance = function(di) {
        di.Q = di.Q || Q;
        return new Main(di);
    };

    Main.prototype.initModel = function() {
        return this.di.Q({});
    };

    return Main;
});
