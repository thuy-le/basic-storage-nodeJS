define(function(require) {
    'use strict';
	describe('ui/profile/step3/Step3Presenter', function() {
		var PresenterHelper = require('test-helpers/Presenter');
		var Step3View = require('ui/profile/step3/Step3View');

        var sut, view, model;
        beforeEach(function() {
            var mvp = PresenterHelper.exerciseCreateMVP(Step3View);
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
