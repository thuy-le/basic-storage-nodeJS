define(function(require) {
    'use strict';

    var Q = require('q');
    var UserGateway = require('infra/UserGateway');
    var AuthenticationService = require('service/AuthenticationService');

    function Login(di) {
        this.di = di;
        this.userGateway = di.userGateway;
        this.authenticationService = di.authenticationService;
    }

    Login.newInstance = function(di) {
        di.Q = di.Q || Q;
        di.userGateway = di.userGateway || UserGateway.newInstance(di);
        di.authenticationService = di.authenticationService || AuthenticationService.newInstance(di);
        return new Login(di);
    };

    Login.prototype.initModel = function() {
        return this.di.Q({});
    };

    Login.prototype.login = function(user) {
        return this.userGateway.validateUser(user.email, user.password).then(function(response) {            
            this.authenticationService.setAuthenticate(response);
            return response;
        }.bind(this));
    };

    return Login;
});
