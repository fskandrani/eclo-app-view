'use strict';

angular.module('ecloApp').controller('ConfigurationCtrl', function($scope, Airvantage, ApplicationService, config) {
    $scope.isHidden = true;
    $scope.data = ApplicationService.getData(config.applicationUid);
    ApplicationService.getAllDataValues(config.systemUid, function(result) {
        // TODO (fsk) this is a static implementation make it generic, the problem here, is that angularJs
        // interprets greenhouse.data.openingThreshold for example as an object in ng-model.
        // The solution is to find a way to escape the dot in ng-model or to have a loop and change all the dots
        // into underscore.
        $scope.openingThreshold = result["greenhouse.data.openingThreshold"][0].value;
        $scope.closingThreshold = result["greenhouse.data.closingThreshold"][0].value;
        $scope.sendDataPeriod = result["greenhouse.data.sendDataPeriod"][0].value;
        $scope.allData = result;
    }, function(error) {
        console.log(error);
    });

    // TODO (fsk) Optimization: Save only the modified fields
    $scope.changed = function(name) {

    };

    $scope.save = function() {
        $scope.dataSettings = {
            application : {
                uid : config.applicationUid
            },
            systems : {
                uids : [ config.systemUid ]
            },
            settings : [
                    {
                        key : "greenhouse.data.openingThreshold",
                        value : $scope.openingThreshold
                    },
                    {
                        key : "greenhouse.data.closingThreshold",
                        value : $scope.closingThreshold
                    },
                    {
                        key : "greenhouse.data.sendDataPeriod",
                        value : $scope.sendDataPeriod
                    } ]

        };
        $scope.saved = ApplicationService.saveSettings($scope.dataSettings);
        $scope.isHidden = false;
    };
});
