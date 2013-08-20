'use strict';

appmodule.factory('ApplicationService', function ApplicationService($resource, $http, $cookies, config) {
    var services = {};

    /**
     * Service that returns a specific system given its uid
     * 
     * @param system
     *            {String} system uid
     * @returns {Object} system
     */
    services.getSystem = function(system) {
        return $resource(
                config.serverURL + '/api/v1/systems/?fields=uid,name,applications&uid=' + system + '&access_token='
                        + $cookies.avop_access_token).get();
    };

    /**
     * Get a specific data from an application
     * 
     * @param application
     *            {String} application uid
     * @returns {Array} list of data
     */
    services.getData = function(application) {
        return $resource(
                config.serverURL + '/api/v1/applications/' + application + '/data?dataTypes=setting%2Cvariable&'
                        + 'access_token=' + $cookies.avop_access_token).query();
    };

    /**
     * Get all data from an application
     * 
     * @param application
     *            {String} application uid
     * @returns {Array} list of data
     */
    services.getAllData = function(application) {
        return $resource(
                config.serverURL + '/api/v1/systems/' + application + '/data?all=true&access_token='
                        + $cookies.avop_access_token).get();
    };

    /**
     * Get the data values of an application
     * 
     * @param application
     *            {String} application uid
     * @param successHandler
     * @param errorHandler
     */
    services.getAllDataValues = function(application, successHandler, errorHandler) {
        $http.get(
                config.serverURL + '/api/v1/systems/' + application + '/data?all=true&access_token='
                        + $cookies.avop_access_token).success(function(data) {
            return successHandler(data);
        }).error(errorHandler);
    };

    /**
     * Save the settings by creating a new operation
     * 
     * @param data
     *            {Object}
     */
    services.saveSettings = function(data) {
        $http({
            method : 'POST',
            url : config.serverURL + '/api/v1/operations/systems/settings?' + 'access_token='
                    + $cookies.avop_access_token,
            data : data
        });
    };

    return services;
});
