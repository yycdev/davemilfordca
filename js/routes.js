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
        $routeProvider.when('/view2', {
            templateUrl: 'partials/partial2.html',
            controller: 'MyCtrl2'
        });
        $routeProvider.otherwise({
            redirectTo: '/'
         });
    }]);
});
