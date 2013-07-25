'use strict';

var appmodule = angular
        .module('ecloApp', [
                'ngCookies',
                'ngResource' ])
        .config(
                function($routeProvider) {
                    $routeProvider
                            .when('/connect/:systemUid/application/:applicationUid', {
                                templateUrl : 'views/default.html',
                                controller : 'ConnectionCtrl'
                            })
                            .when('/login', {
                                templateUrl : 'views/default.html',
                                controller : 'LoginCtrl'
                            })
                            .when(
                                    '/token/:systemUid/application/:applicationUid&access_token=:access_token&token_type=bearer&expires_in=:expire',
                                    {
                                        templateUrl : 'views/default.html',
                                        controller : 'TokenCtrl'
                                    }).when('/home/:systemUid/application/:applicationUid', {
                                templateUrl : 'views/main.html',
                                controller : 'MainCtrl'
                            }).when('/configuration/:systemUid/application/:applicationUid', {
                                templateUrl : 'views/configuration.html',
                                controller : 'ConfigurationCtrl'
                            }).otherwise({
                                redirectTo : '/login'
                            });
                });
