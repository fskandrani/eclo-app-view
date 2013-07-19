'use strict';

appmodule.factory('Airvantage', function($resource, $cookies, config) {

    return $resource('https://auto-branch.m2mop.net/api/oauth/token?grant_type=password'
            + '&username=administrator@m2mop.net&password=zs18mk--' + '&client_id=085d82466f824079a829f301b8a1f492&'
            + 'client_secret=6854fa72f98e492db163458085d5b89c');
});