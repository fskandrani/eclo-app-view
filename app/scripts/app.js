'use strict';

var appmodule = angular.module('ecloApp', [
        'ngCookies',
        'ngResource' ]).config(function($routeProvider) {
    $routeProvider.when('/login', {
        templateUrl : 'views/default.html',
        controller : 'LoginCtrl'
    }).when('/token', {
        templateUrl : 'views/default.html',
        controller : 'TokenCtrl'
    }).when('/home', {
        templateUrl : 'views/main.html',
        controller : 'MainCtrl'
    });
});
