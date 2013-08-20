'use strict';

appmodule
        .controller(
                'MainCtrl',
                function($scope, $routeParams, ApplicationService, config) {
                    $scope.systems = ApplicationService.getSystem($routeParams.system);
                    $scope.data = ApplicationService.getData($routeParams.application);
                    // Loop to refresh the data every 30 seconds
                    var check = function() {
                        $scope.allData = ApplicationService.getAllData($routeParams.system);
                        setTimeout(check, 30000);
                    };
                    check();

                    $scope.isHidden = true;
                    $scope.isDisabled = true;
                    $scope.data = ApplicationService.getData($routeParams.application);
                    // Display all the data returned by the application (settings and variables)
                    ApplicationService
                            .getAllDataValues(
                                    $routeParams.system,
                                    function(result) {
                                        // TODO (fsk) this is a static implementation make it generic, the problem here,
                                        // is that angularJs
                                        // interprets greenhouse.data.openingThreshold for example as an object in
                                        // ng-model.
                                        // The solution is to find a way to escape the dot in ng-model or to have a loop
                                        // and change all the dots
                                        // into underscore.
                                        // into underscore.
                                        $scope.openingThreshold = result["greenhouse.data.openingThreshold"] ? result["greenhouse.data.openingThreshold"][0].value
                                                : "";
                                        $scope.closingThreshold = result["greenhouse.data.closingThreshold"] ? result["greenhouse.data.closingThreshold"][0].value
                                                : "";
                                        $scope.sendDataPeriod = result["greenhouse.data.sendDataPeriod"] ? result["greenhouse.data.sendDataPeriod"][0].value
                                                : "";
                                        $scope.allData = result;
                                    }, function(error) {
                                        console.log(error);
                                    });

                    // Save the new settings by creating an operation.
                    $scope.save = function() {
                        $scope.dataSettings = {
                            application : {
                                uid : $routeParams.application
                            },
                            systems : {
                                uids : [ $routeParams.system ]
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
