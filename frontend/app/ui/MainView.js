define(function(require) {
    'use strict';
    var MainPresenter = require('ui/MainPresenter');
    var MainModel = require('ui/MainModel');
    var BaseView = require('cmvp/views/BaseView');

    function MainView(di) {
        BaseView.constructor(this, di);
        this._initFn();
    }

    MainView.newInstance = function(di) {
        var view = BaseView.newInstance(di, {
            presenter: MainPresenter,
            model: MainModel,
            view: MainView
        });
        return view;
    };

    MainView.prototype.show = BaseView.methods.show;
    MainView.prototype.showError = BaseView.methods.showError;

    MainView.prototype.initData = function(dto) {
        this.data.dto = dto;
    };

    MainView.prototype._initFn = function() {
        var data = this.data;
        this.fn.showDetails = function() {
            data.detailsVisible = true;
        };
        this.fn.hideDetails = function() {
            data.detailsVisible = false;
        };
        
    };

    return MainView;
});
