'use strict';

/**
 * @ngdoc function
 * @name fruitNinjaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fruitNinjaApp
 */
angular.module('fruitNinjaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
