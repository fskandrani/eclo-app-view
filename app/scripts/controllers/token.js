'use strict';

appmodule.controller('TokenCtrl',
        function($http, $location, $scope, $routeParams, $cookies, config, ApplicationService) {
            $scope.pageTitle = "token recovery";
            $cookies.avop_access_token = $routeParams.access_token;
            ApplicationService.getSystems(function(result) {
                if (result.length) {
                    $cookies.systemUid = result[0].uid;
                    $cookies.applicationUid = result[0].applications[0].uid;
                    $cookies.applicationName = result[0].applications[0].name;
                }
                $location.path('/home');
            });
        });
