define(['./module'], function(controllers) {
    'use strict';

    function whoAmIController($scope)
    {

    } // whoAmIController

    whoAmIController.$inject=['$scope'];

    controllers.controller('WhoAmICtrl', ['$scope', whoAmIController]);
});
