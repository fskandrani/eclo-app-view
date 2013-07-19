'use strict';

appmodule.controller('MainCtrl', function($scope, Airvantage, ApplicationService) {
    $scope.systems = ApplicationService.getSystem("64505925d5044b018f2ec5eee3a66959");
    $scope.data = ApplicationService.getData("f66a3f451a3b4739b806d0a49d64a461");
    $scope.allData = ApplicationService.getAllData("f66a3f451a3b4739b806d0a49d64a461");

});
