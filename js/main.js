/**
* configure RequireJS
* prefer named modules to long paths, especially for version mgt
* or 3rd party libraries
*/
require.config({
    paths: {
        'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular.min',
        'angular-route': '//ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular-route.min',
        'angular-animate': '//ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular-animate.min',
        'angular-touch': 'https://code.angularjs.org/1.3.8/angular-touch.min',
        'angular-strap': '//cdnjs.cloudflare.com/ajax/libs/angular-strap/2.1.5/angular-strap.min',
        'angular-strap-tpl': '//cdnjs.cloudflare.com/ajax/libs/angular-strap/2.1.5/angular-strap.tpl.min',
        'angular-scroll': 'lib/angular-scroll/angular-scroll.min',
        'domReady': 'lib/requirejs-domready/domReady',
        'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
        'gsap': '//cdnjs.cloudflare.com/ajax/libs/gsap/1.10.3/TweenMax.min'
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
        'angular-animate': {
            deps: ['angular']
        },
        'angular-touch': {
            deps: ['angular']
        },
        'angular-strap': {
            deps: ['angular']
        },
        'angular-strap-tpl': {
            deps: ['angular-strap']
        },
        'angular-scroll': {
            deps: ['angular']
        },
        'jquery': {
            exports: '$'
        }
    },
    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});
