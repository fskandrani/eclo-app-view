'use strict';

appmodule.factory('ApplicationService', function ApplicationService($resource, $http, $cookies, config) {
    var services = {};
    services.getSystem = function(systemUid) {
        return $resource(
                config.serverURL + '/api/v1/systems/?fields=uid,name,applications&uid=' + systemUid + '&access_token='
                        + $cookies.avop_access_token).get();
    };

    services.getData = function(applicationUid) {
        return $resource(
                config.serverURL + '/api/v1/applications/' + applicationUid + '/data?dataTypes=setting%2Cvariable&'
                        + 'access_token=' + $cookies.avop_access_token).query();
    };

    services.getAllData = function(applicationUid) {
        return $resource(
                config.serverURL + '/api/v1/systems/' + applicationUid + '/data?all=true&access_token=' + $cookies.avop_access_token).get();
    };

    services.getAllDataValues = function(applicationUid, successHandler, errorHandler) {
        $http.get(
                config.serverURL + '/api/v1/systems/' + applicationUid + '/data?all=true&access_token=' + $cookies.avop_access_token).success(function(data) {
            return successHandler(data);
        }).error(errorHandler);
    };

    services.saveSettings = function(data) {
        $http({
            method : 'POST',
            url : config.serverURL + '/api/v1/operations/systems/settings?' + 'access_token='
                    + $cookies.avop_access_token,
            data : data
        });
    };

    // This service is not used anymore
    services.getApplicationDetails = function(applicationUid, successHandler, errorHandler) {
        $http.get(
                config.serverURL + '/api/v1/applications?uid=' + applicationUid + '&access_token='
                        + $cookies.avop_access_token).success(function(response) {
            return successHandler(response);
        }).error(errorHandler);
    };

    // This service is not used anymore
    services.getSystems = function(successHandler, errorHandler) {
        $http.get(
                config.serverURL + '/api/v1/systems/?fields=uid,name,applications&access_token='
                        + $cookies.avop_access_token).success(function(data) {
            return successHandler(data.items);
        }).error(errorHandler);
    };
    return services;
});
