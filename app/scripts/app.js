'use strict';

var appmodule = angular.module('ecloApp', [
        'ngCookies',
        'ngResource' ]).config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl : 'views/main.html',
        controller : 'MainCtrl'
    }).when('/login', {
        templateUrl : 'views/default.html',
        controller : 'LoginCtrl'
    }).when('/token&access_token=:access_token&token_type=bearer&expires_in=:expire', {
        templateUrl : 'views/default.html',
        controller : 'TokenCtrl'
    }).otherwise({
        redirectTo : '/'
    });
});
