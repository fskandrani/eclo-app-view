'use strict';

appmodule.controller('TokenCtrl', function($location, $scope, $routeParams, $cookies, config) {
    $scope.pageTitle = "token recovery";
    $cookies.avop_access_token = $routeParams.access_token;
    $location.path('/home/' + $routeParams.systemUid + '/application/' + $routeParams.applicationUid);
});
