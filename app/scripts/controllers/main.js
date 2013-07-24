'use strict';

appmodule.controller('MainCtrl', function($scope, $cookies, Airvantage, ApplicationService, config) {
    $scope.systems = ApplicationService.getSystem($cookies.systemUid);
    $scope.data = ApplicationService.getData($cookies.applicationUid);
    // Loop to refresh the data every 30 seconds
    var check = function() {
        $scope.allData = ApplicationService.getAllData($cookies.systemUid);
        setTimeout(check, 3000);
    };
    check();
});
