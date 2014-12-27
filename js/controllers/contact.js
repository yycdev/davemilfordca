define(['./module'], function(controllers) {
    'use strict';
    controllers.controller('ContactCtrl', function($scope, $location) {
    	var foo = "davemilford";
    	var at = "@";
    	var bar = "gmail";
    	var bartld = "com";
    	$scope.contactModal = {
  			"title": "Email Me!",
  			"content": "<a href='mailto:"+foo+at+bar+"."+bartld+"'>"+foo+at+bar+"."+bartld+"</a>"
		};
    });
});
