/**
* loads sub modules and wraps them up into the main module
* this should be used for top-level module definitions only
*/
define([
  'angular',
  'angular-route',
  'angular-strap',
  'angular-strap-tpl',
  'angular-scroll',
  './services/index',
  './controllers/index',
  './directives/index',
  './filters/index'
  ], function(angular) {
  'use strict';

  return angular.module('app', [
    'app.services',
    'app.controllers',
    'app.directives',
    'app.filters',
    'ngRoute',
   // 'mgcrea.ngStrap',
   // 'mgcrea.ngStrap.helpers.dimensions',
   // 'mgcrea.ngStrap.tooltip',
    'duScroll'
  ]);
});
