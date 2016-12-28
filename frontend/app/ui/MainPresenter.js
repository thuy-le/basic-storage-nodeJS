define(function(require) {
    'use strict';
    var PresenterHandlerCreator = require('cmvp/services/PresenterHandlerCreator');

    function MainPresenter(di) {
        this.di = di;
    }

    MainPresenter.newInstance = function(di) {
        di = di || {};
        return new MainPresenter(di);
    };

    MainPresenter.prototype.show = function(view, model) {
        var creator = new PresenterHandlerCreator(this, view, model);
        view.event.onLoad = creator.createEventHandler({modelMethod: 'initModel', viewSuccess: 'initData'});
    };

    return MainPresenter;
});
