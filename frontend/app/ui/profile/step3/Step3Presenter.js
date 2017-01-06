define(function(require) {
    'use strict';
    var PresenterHandlerCreator = require('cmvp/services/PresenterHandlerCreator');

    function Step3Presenter(di) {
        this.di = di;
    }

    Step3Presenter.newInstance = function(di) {
        di = di || {};
        return new Step3Presenter(di);
    };

    Step3Presenter.prototype.show = function(view, model) {
        var creator = new PresenterHandlerCreator(this, view, model);
        view.event.onLoad = creator.createEventHandler({modelMethod: 'initModel', viewSuccess: 'initData'});
    };

    return Step3Presenter;
});
