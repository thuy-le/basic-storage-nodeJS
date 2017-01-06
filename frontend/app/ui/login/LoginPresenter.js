define(function(require) {
    'use strict';
    var PresenterHandlerCreator = require('cmvp/services/PresenterHandlerCreator');

    function LoginPresenter(di) {
        this.di = di;
    }

    LoginPresenter.newInstance = function(di) {
        di = di || {};
        return new LoginPresenter(di);
    };

    LoginPresenter.prototype.show = function(view, model) {
        var creator = new PresenterHandlerCreator(this, view, model);
        view.event.onLoad = creator.createEventHandler({modelMethod: 'initModel', viewSuccess: 'initData'});
    };

    return LoginPresenter;
});
