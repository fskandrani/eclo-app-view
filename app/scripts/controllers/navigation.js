'use strict';

appmodule.controller('NavigationCtrl', function($routeParams, $scope, $location, $cookies, ApplicationService, config) {
    $scope.systemUid = $routeParams.systemUid;
    $scope.applicationUid = $routeParams.applicationUid;

});
