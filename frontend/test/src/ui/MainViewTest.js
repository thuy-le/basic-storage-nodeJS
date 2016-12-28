define(function(require) {
    'use strict';
	describe('ui/MainView', function() {
		var MainView = require('ui/MainView');
		var ViewHelper = require('test-helpers/View');

		var sut;
		beforeEach(function() {
			sut = ViewHelper.exerciseCreate(MainView);
		});

		var getSut = function() { return sut; };
		ViewHelper.testShowCallsPresenterShow(getSut);
		ViewHelper.testShowMethodsAreDefined(getSut);
		ViewHelper.testInitFn(getSut, []);

        describe('initData', function() {
            describe('always', function() {
                it('should fill sut.data', function() {
                    sut.initData({});
                    expect(Object.keys(sut.data).length).toBeTruthy();
                });
            });
        });
	});
});
