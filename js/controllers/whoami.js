define(['./module'], function(controllers) {
    'use strict';

    function whoAmIController($scope)
    {
    	var container = angular.element(document.getElementById('page-content-wrapper-contents'));
    	var geekery = angular.element(document.getElementById('geekery'));

	    $scope.toTheTop = function() {
	      container.scrollTop(0, 5000);
	    };

	    $scope.toGeekery = function() {
	      container.scrollTo(geekery, 0, 1000);
	    };

    } // whoAmIController

    whoAmIController.$inject=['$scope'];

    controllers.controller('WhoAmICtrl', ['$scope', whoAmIController]);
});
