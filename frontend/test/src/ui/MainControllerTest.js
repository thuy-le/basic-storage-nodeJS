define(function(require) {
    'use strict';
	describe('ui/MainController', function() {
		var MainController = require('ui/MainController');
		var ControllerHelper = require('test-helpers/Controller');
		ControllerHelper.testCallsViewShow(MainController);
	});
});
