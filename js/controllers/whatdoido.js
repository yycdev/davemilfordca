define(['./module'], function(controllers) {
    'use strict';
    controllers.controller('WhatDoIDoCtrl', ['$scope', '$window', '$location', function($scope, $window, $location) {
    	$scope.$on('$viewContentLoaded', function(event) {
		$window.ga('send', 'pageview', { page: $location.path() });
  		});

    	// angular-strap needs this for some reason
    	$scope.popover = {"title": "",  "content": " ", "testing": "blah"};
    }]);
});
