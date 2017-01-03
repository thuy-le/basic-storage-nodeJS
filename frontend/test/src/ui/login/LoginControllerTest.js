define(function(require) {
    'use strict';
	describe('ui/login/LoginController', function() {
		var LoginController = require('ui/login/LoginController');
		var ControllerHelper = require('test-helpers/Controller');
		ControllerHelper.testCallsViewShow(LoginController);
	});
});
