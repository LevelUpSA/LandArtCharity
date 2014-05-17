'use strict';

var app = angular.module('landartApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/index.html',
            controller: 'IndexController'
        })
        .otherwise({
            redirectTo: '/'
        });
});
