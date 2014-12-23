/**
* loads sub modules and wraps them up into the main module
* this should be used for top-level module definitions only
*/
define([
  'angular',
  'angular-route',
  'angular-strap',
  'angular-strap-tpl',
  './controllers/index',
  './directives/index',
  './filters/index',
  './services/index'
  ], function(angular) {
  'use strict';

  return angular.module('app', [
    'app.controllers',
    'app.directives',
    'app.filters',
    'app.services',
    'ngRoute',
    'mgcrea.ngStrap',
    'mgcrea.ngStrap.helpers.dimensions'
  ]);
});
