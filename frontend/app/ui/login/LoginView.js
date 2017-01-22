define(function(require) {
    'use strict';
    var LoginPresenter = require('ui/login/LoginPresenter');
    var LoginModel = require('ui/login/LoginModel');
    var BaseView = require('cmvp/views/BaseView');

    function LoginView(di) {
        BaseView.constructor(this, di);
        this.$location = di.$location;
        this._initFn();
    }

    LoginView.newInstance = function(di) {
        di.$location = di.$location || {};
        var view = BaseView.newInstance(di, {
            presenter: LoginPresenter,
            model: LoginModel,
            view: LoginView
        });
        return view;
    };

    LoginView.prototype.show = BaseView.methods.show;
    LoginView.prototype.showError = BaseView.methods.showError;

    LoginView.prototype.initData = function(dto) {
        this.data.dto = dto;
        this.data.user = this.data.user || {};
    };

    LoginView.prototype._initFn = function() {};

    LoginView.prototype.onLoginSuccess = function(response) {
        
         this.$location.path('/');  
    };

    LoginView.prototype.onLoginError = function(error) {        
        error = JSON.parse(error.responseText);
        this.data.loginError = error.message;
    };

    return LoginView;
});
