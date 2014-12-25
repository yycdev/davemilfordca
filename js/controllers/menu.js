define(['./module'], function(controllers) {
    'use strict';

    function menuController($scope, whoAmIMenuContents, whatIDoMenuContents)
    {    	
    	$scope.whoamidropdownlist = whoAmIMenuContents;
    	$scope.whatidodropdownlist = whatIDoMenuContents;
    }

    menuController.$inject=['$scope','whoAmIMenuContents', 'whatIDoMenuContents'];

    controllers.controller('MenuCtrl', ['$scope', 'whoAmIMenuContents', 'whatIDoMenuContents', menuController]);
});
