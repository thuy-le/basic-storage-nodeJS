define(function(require) {
    'use strict';
    var LoginPresenter = require('ui/login/LoginPresenter');
    var LoginModel = require('ui/login/LoginModel');
    var BaseView = require('cmvp/views/BaseView');

    function LoginView(di) {
        BaseView.constructor(this, di);
        this._initFn();
    }

    LoginView.newInstance = function(di) {
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
    };

    LoginView.prototype._initFn = function() {};

    return LoginView;
});
