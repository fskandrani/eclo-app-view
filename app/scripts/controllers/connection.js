'use strict';

appmodule.controller('ConnectionCtrl', function($scope, $routeParams, $location, config) {
    config.system = $routeParams.system;
    config.application = $routeParams.application;
    $location.path('/login');
});
