define(['./module'], function(controllers) {
    'use strict';
    controllers.controller('WhatDoIDoCtrl', ['$scope', function($scope) {
    	// angular-strap needs this for some reason
    	$scope.popover = {"title": "",  "content": " ", "testing": "blah"};
    }]);
});
