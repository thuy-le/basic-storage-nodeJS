define(function(require) {
    'use strict';
	describe('ui/profile/step3/Step3Controller', function() {
		var Step3Controller = require('ui/profile/step3/Step3Controller');
		var ControllerHelper = require('test-helpers/Controller');
		ControllerHelper.testCallsViewShow(Step3Controller);
	});
});
