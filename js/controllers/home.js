define(['./module'], function(controllers) {
    'use strict';
    controllers.controller('HomeCtrl', function($scope, $window, $location) {
    	$scope.$on('$viewContentLoaded', function(event) {
		$window.ga('send', 'pageview', { page: $location.path() });
  		});
    });
});
