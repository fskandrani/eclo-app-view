'use strict';

appmodule.controller('NavigationCtrl', function($routeParams, $scope, $location, $cookies, ApplicationService, config) {
    $scope.system = $routeParams.system;
    $scope.application = $routeParams.application;

});
