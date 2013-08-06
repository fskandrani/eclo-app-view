'use strict';

appmodule.controller('LoginCtrl', function($location, $scope, config) {
    $scope.pageTitle = "login to AirVantage";
    window.location = config.serverURL
            + "/oauth/authorize?client_id="
            + config.client_id
            + "&response_type=token&redirect_uri="
            + encodeURIComponent($location.absUrl().replace($location.url(),
                    "/token?system=" + config.system + "&application=" + config.application));
});
