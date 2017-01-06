define(function(require) {
    'use strict';
    var Step3Presenter = require('ui/profile/step3/Step3Presenter');
    var Step3Model = require('ui/profile/step3/Step3Model');
    var BaseView = require('cmvp/views/BaseView');

    function Step3View(di) {
        BaseView.constructor(this, di);
        this._initFn();
    }

    Step3View.newInstance = function(di) {
        var view = BaseView.newInstance(di, {
            presenter: Step3Presenter,
            model: Step3Model,
            view: Step3View
        });
        return view;
    };

    Step3View.prototype.show = BaseView.methods.show;
    Step3View.prototype.showError = BaseView.methods.showError;

    Step3View.prototype.initData = function(dto) {
        this.data.dto = dto;
        this.fn.choosed = this.choosed.bind(this);
        this.data.selected = 1;
    };

    Step3View.prototype.choosed = function(selected){
        this.data.selected = selected;
    };

    Step3View.prototype._initFn = function() {};

    return Step3View;
});
