'use strict';

appmodule.controller('TokenCtrl', function($scope, $location) {
    $scope.pageTitle = "token recovery";
    $location.path('/');
    $cookies.avop_access_token = $routeParams.access_token;
});
