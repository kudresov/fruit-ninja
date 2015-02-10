'use strict';

/**
 * @ngdoc overview
 * @name fruitNinjaApp
 * @description
 * # fruitNinjaApp
 *
 * Main module of the application.
 */
angular
  .module('fruitNinjaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
