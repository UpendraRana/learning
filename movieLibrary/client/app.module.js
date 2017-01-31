(function() {
    'use strict';

    angular
        .module('movies', ['common.ui', 'common.core'])
        .config(config);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when('/movies', {
                templateUrl: '/movies/index.html',
                controller: 'IndexCtrl'
            })
            .when('/movies/:id', {
                templateUrl: '/movies/details.html',
                controller: 'DetailsCtrl'
            });
    };
}());