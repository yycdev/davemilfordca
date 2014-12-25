/**
* configure RequireJS
* prefer named modules to long paths, especially for version mgt
* or 3rd party libraries
*/
require.config({
    paths: {
        'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular',
        'angular-route': '//ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular-route',
        'angular-sanitize': '//ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular-sanitize',
        'angular-strap': '//cdnjs.cloudflare.com/ajax/libs/angular-strap/2.1.4/angular-strap',
        'angular-strap-tpl': '//cdnjs.cloudflare.com/ajax/libs/angular-strap/2.1.4/angular-strap.tpl',
        'domReady': 'lib/requirejs-domready/domReady',
        'jquery': '//code.jquery.com/jquery-2.1.3.min',
        'bootstrap-js': 'lib/bootstrap'
    },
    /**
    * for libs that either do not support AMD out of the box, or
    * require some fine tuning to dependency mgt'
    */
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-sanitize': {
            deps: ['angular']
        },
        'angular-strap': {
            deps: ['angular', 'jquery']
        },
        'angular-strap-tpl': {
            deps: ['angular-strap']
        },
        'jquery': {
            exports: '$'
        },
        'bootstrap-js': {
            deps: ['jquery']
        }
    },
    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});
