'use strict';

var App = angular.module('landartApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
]);

App.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/index.html',
            controller: 'IndexController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
