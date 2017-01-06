define(function(require) {
    'use strict';
	describe('ui/login/LoginModel', function() {
		var LoginModel = require('ui/login/LoginModel');
		var PromiseHelper = require('test-helpers/Promise');

		var sut;
		beforeEach(function() {
            sut = LoginModel.newInstance({Q: PromiseHelper.fake});
		});

        function mkInitialDTO() {
            return {};
        }

		describe('initModel', function() {
            describe('always', function() {
                it('should return the initial dto', function() {
                    expect(sut.initModel().getActualResult()).toEqual(mkInitialDTO());
                });
            });
		});
	});
});
