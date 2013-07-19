'use strict';

appmodule.controller('LoginCtrl', function($location, $scope, config) {

    $scope.pageTitle = "login to AirVantage";
    window.location = config.serverURL + "/oauth/authorize?client_id=" + config.client_id
            + "&response_type=token&redirect_uri="
            + encodeURIComponent($location.absUrl().replace($location.url(), "/token"));
});

appmodule.controller('TokenCtrl', function($http, $location, $scope, $routeParams, $cookies) {
    $scope.pageTitle = "token recovery";
    $cookies.avop_access_token = $routeParams.access_token;
    $location.path('/system');
});
