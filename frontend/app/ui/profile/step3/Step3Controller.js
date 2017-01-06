define(function(require) {
    'use strict';
    var BaseController = require('cmvp/controllers/BaseController');
	var View = require('ui/profile/step3/Step3View');

	function Step3Controller($scope) {
		BaseController.constructor(this, {
		    $scope: $scope
		}, View);
	}

	Step3Controller.$inject = ['$scope'];
    return Step3Controller;
});
