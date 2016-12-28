define(function(require) {
    'use strict';
	describe('ui/MainPresenter', function() {
		var PresenterHelper = require('test-helpers/Presenter');
		var MainView = require('ui/MainView');

        var sut, view, model;
        beforeEach(function() {
            var mvp = PresenterHelper.exerciseCreateMVP(MainView);
            view = mvp.viewStub;
            model = mvp.modelStub;
            sut = mvp.presenter;
        });

        function getSut() { return sut; }
        function getModel() { return model; }
        function getView() { return view; }

		PresenterHelper.testShowSetsValidEvents(getSut, getView, getModel, ['onLoad']);
	});

});
