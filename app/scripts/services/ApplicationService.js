'use strict';

appmodule
        .factory(
                'ApplicationService',
                function ApplicationService($resource, $http, $cookies, config) {
                    var services = {};
                    services.getSystem = function(systemUid) {
                        return $resource(
                                config.serverURL + '/api/v1/systems/?fields=uid,name,applications&uid=' + systemUid
                                        + '&access_token=' + $cookies.avop_access_token).get();
                    };

                    services.getData = function(applicationUid) {
                        return $resource(
                                config.serverURL + '/api/v1/applications/' + applicationUid
                                        + '/data?dataTypes=setting%2Cvariable&' + 'access_token='
                                        + $cookies.avop_access_token).query();
                    };

                    services.getAllData = function(applicationUid) {
                        return $resource(
                                config.serverURL
                                        + '/api/v1/applications/'
                                        + applicationUid
                                        + '/data?ids=greenhouse.data.temperature,greenhouse.data.luminosity,greenhouse.data.humidity,greenhouse.data.servo&'
                                        + 'access_token=' + $cookies.avop_access_token).query();
                    };
                    return services;
                });
