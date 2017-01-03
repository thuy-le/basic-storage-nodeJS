define(function(require) {
    'use strict';

    var Q = require('q');

    function Login(di) {
        this.di = di;
    }

    Login.newInstance = function(di) {
        di.Q = di.Q || Q;
        return new Login(di);
    };

    Login.prototype.initModel = function() {
        return this.di.Q({});
    };

    return Login;
});
