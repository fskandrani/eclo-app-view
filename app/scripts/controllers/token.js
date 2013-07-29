'use strict';

appmodule.controller('TokenCtrl', function($location, $scope, $routeParams, $cookies, config) {
    console.log("$routeParams : ", $routeParams);
    $scope.pageTitle = "token recovery";
    $cookies.avop_access_token = $routeParams.access_token;
    $location.path('/home').search({
        'systemUid' : $routeParams.systemUid,
        'applicationUid' : $routeParams.applicationUid
    });
});
