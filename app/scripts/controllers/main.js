'use strict';

appmodule.controller('MainCtrl', function($scope, Airvantage, ApplicationService, config) {
    $scope.systems = ApplicationService.getSystem(config.systemUid);
    console.log("systems : ", $scope.systems);
    $scope.data = ApplicationService.getData(config.applicationUid);
    // Loop to refresh the data every 30 seconds
    var check = function() {
        $scope.allData = ApplicationService.getAllData(config.systemUid);
        setTimeout(check, 3000);
    };
    check();
});
