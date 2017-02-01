(function() {
    'use strict';

    angular
        .module('movies', ['common.ui', 'common.core'])
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];


    function config($routeProvider, $locationProvider) {
        $routeProvider
            .when('/movies', {
                templateUrl: '/movies/index.html',
                controller: 'IndexCtrl'
            })
            .when('/movies/:id', {
                templateUrl: '/movies/details.html',
                controller: 'DetailsCtrl'
            });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    };
    location
}());