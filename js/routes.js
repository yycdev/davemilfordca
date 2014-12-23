/**
* Defines the main routes in the application.
* The routes you see here will be anchors '#/' unless specifically configured otherwise.
*/
define(['./app'], function(app) {
    'use strict';
    return app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'partials/homepage.html',
            controller: 'HomeCtrl'
        });
        $routeProvider.when('/view2', {
            templateUrl: 'partials/partial2.html',
            controller: 'MyCtrl2'
        });
        $routeProvider.otherwise({
            redirectTo: '/home'
         });
    }]);
});
