'use strict';

describe(
        'Controller: ConfigurationCtrl',
        function() {

            // load the controller's module
            beforeEach(module('ecloApp'));

            var ConfigurationCtrl, scope;

            // Initialize the controller and a mock scope
            beforeEach(inject(function($controller, $rootScope, $injector, $httpBackend) {
                $httpBackend = $injector.get('$httpBackend');
                $httpBackend.when('GET', '/configuration/:systemUid/application/:applicationUid').respond({
                    'greenhouse.data.openingThreshold' : [ {
                        value : '0'
                    } ],
                    'greenhouse.data.closingThreshold' : [ {
                        value : '0'
                    } ],
                    'greenhouse.data.sendDataPeriodThreshold' : [ {
                        value : '0'
                    } ],

                });
                scope = $rootScope.$new();
                ConfigurationCtrl = $controller('ConfigurationCtrl', {
                    $scope : scope
                });
            }));

            it(
                    'Should deactivate the save button by default and hide the confirmation message',
                    function() {
                        $httpBackend
                                .expectGet('GET http://auto-branch.m2mop.net/api/v1/applications/undefined/data?dataTypes=setting%2Cvariable&access_token=undefined');
                        expect(scope.isHidden).toBe(true);
                        expect(scope.isDisabled).toBe(true);
                    });

            it('Should contains 4 settings', function() {
                expect(scope.openingThreshold).toBeDefined();
                expect(scope.closingThreshold).toBeDefined();
                expect(scope.sendDataPeriod).toBeDefined();

            })
        });
