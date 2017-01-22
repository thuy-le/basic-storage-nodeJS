define(function(require) {
    'use strict';
    var BaseController = require('cmvp/controllers/BaseController');
	var View = require('ui/login/LoginView');

	function LoginController($scope, $location, $routeParams) {
		BaseController.constructor(this, {
		    $scope: $scope,
			$location: $location,
			$routeParams: $routeParams
		}, View);
	}

	LoginController.$inject = ['$scope', '$location', '$routeParams'];
    return LoginController;
});
