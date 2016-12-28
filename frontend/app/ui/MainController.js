define(function(require) {
    'use strict';
    var BaseController = require('cmvp/controllers/BaseController');
	var View = require('ui/MainView');

	function MainController($scope) {
		BaseController.constructor(this, {
		    $scope: $scope
		}, View);
	}

	MainController.$inject = ['$scope'];
    return MainController;
});
