'use strict';

appmodule.controller('MainCtrl', function($scope, $routeParams, ApplicationService, config) {
    $scope.systems = ApplicationService.getSystem($routeParams.system);
    $scope.data = ApplicationService.getData($routeParams.application);
    // Loop to refresh the data every 30 seconds
    var check = function() {
        $scope.allData = ApplicationService.getAllData($routeParams.system);
        setTimeout(check, 30000);
    };
    check();
});
