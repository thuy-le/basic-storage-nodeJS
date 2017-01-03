define(function(require) {
    'use strict';
	describe('ui/login/LoginPresenter', function() {
		var PresenterHelper = require('test-helpers/Presenter');
		var LoginView = require('ui/login/LoginView');

        var sut, view, model;
        beforeEach(function() {
            var mvp = PresenterHelper.exerciseCreateMVP(LoginView);
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
