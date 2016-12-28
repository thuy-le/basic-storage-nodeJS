define(function(require) {
    'use strict';

    var LocalStorage = require('cmvp/services/LocalStorage');
    var moment = require('moment');

    function AuthenticationService(di) {
        this.di = di;
        this.localStorage = di.localStorage;
        this.moment = moment;
    }

    AuthenticationService.newInstance = function(di) {
        di = di || {};
        di.localStorage = di.localStorage || LocalStorage.newInstance();
        return new AuthenticationService(di);
    };

    AuthenticationService.prototype.setAuthenticate = function(user) {
        console.log(user);
        var data = {
            expire: this.moment().add(1, 'hours').toISOString(),
            user: user
        };
        this.localStorage.set('jda-authentication', data);
    };

    AuthenticationService.prototype.updateExpire = function() {
        this.authenticate.expire = this.moment().add(5, 'hours').toISOString();
        this.localStorage.set('jda-authentication', this.authenticate);
    };

    AuthenticationService.prototype.getAuthenticate = function() {
        this.authenticate = window.localStorage['jda-authentication'] ?
            JSON.parse(window.localStorage['jda-authentication']) : null;
    };

    AuthenticationService.prototype.removeAuthenticate = function() {
        window.localStorage.clear();
    };

    AuthenticationService.prototype.validate = function() {
        this.getAuthenticate();
        if (!this.authenticate) return false;
        return this.moment(this.authenticate.expire).diff(this.moment()) > 0;
    };

    AuthenticationService.prototype.getUser = function() {
        return this.authenticate ? this.authenticate.user : {};
    };

    return AuthenticationService;
});
