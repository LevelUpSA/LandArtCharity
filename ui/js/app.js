'use strict';

var landartApp = angular.module('landartApp', [
  'ngRoute',
])

landartApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'view/home.html',
        controller: 'HomeController'
      });
  }]);
