/**
* Defines the main routes in the application.
* The routes you see here will be anchors '#/' unless specifically configured otherwise.
*/
define(['./app'], function(app) {
    'use strict';
    return app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.when('/', {
            templateUrl: 'partials/homepage.html',
            controller: 'HomeCtrl'
        });
        $routeProvider.when('/whoami', {
            templateUrl: 'partials/whoami.html',
            controller: 'WhoAmICtrl'
        });
        $routeProvider.when('/whatdoido', {
            templateUrl: 'partials/whatdoido.html',
            controller: 'WhatDoIDoCtrl'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
         });
    }]);
});
