define(function(require) {
    'use strict';
    var BaseController = require('cmvp/controllers/BaseController');
	var View = require('ui/login/LoginView');

	function LoginController($scope) {
		BaseController.constructor(this, {
		    $scope: $scope
		}, View);
	}

	LoginController.$inject = ['$scope'];
    return LoginController;
});
