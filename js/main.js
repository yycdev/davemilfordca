/**
* configure RequireJS
* prefer named modules to long paths, especially for version mgt
* or 3rd party libraries
*/
require.config({
    paths: {
        'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular',
        'angular-route': '//ajax.googleapis.com/ajax/libs/angularjs/1.3.8/angular-route',
        'angular-strap': '//cdnjs.cloudflare.com/ajax/libs/angular-strap/2.1.5/angular-strap',
        'angular-strap-tpl': '//cdnjs.cloudflare.com/ajax/libs/angular-strap/2.1.5/angular-strap.tpl',
        'angular-scroll': 'lib/angular-scroll/angular-scroll',
        'domReady': 'lib/requirejs-domready/domReady'
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
        'angular-strap': {
            deps: ['angular']
        },
        'angular-strap-tpl': {
            deps: ['angular-strap']
        },
        'angular-scroll': {
            deps: ['angular']
        }
    },
    deps: [
        // kick start application... see bootstrap.js
        './bootstrap'
    ]
});
