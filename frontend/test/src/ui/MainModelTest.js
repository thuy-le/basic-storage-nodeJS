define(function(require) {
    'use strict';
	describe('ui/MainModel', function() {
		var MainModel = require('ui/MainModel');
		var PromiseHelper = require('test-helpers/Promise');

		var sut;
		beforeEach(function() {
            sut = MainModel.newInstance({Q: PromiseHelper.fake});
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
