'use strict';

appmodule.controller('ConnectionCtrl', function($scope, $routeParams, $location, config) {
    config.systemUid = $routeParams.systemUid;
    config.applicationUid = $routeParams.applicationUid;
    $location.path('/login');
});
