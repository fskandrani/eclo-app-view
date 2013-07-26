'use strict';

appmodule.controller('MainCtrl', function($scope, $routeParams, ApplicationService, config) {
    $scope.systems = ApplicationService.getSystem($routeParams.systemUid);
    $scope.data = ApplicationService.getData($routeParams.applicationUid);
    // Loop to refresh the data every 30 seconds
    var check = function() {
        $scope.allData = ApplicationService.getAllData($routeParams.systemUid);
        setTimeout(check, 30000);
    };
    check();
});
