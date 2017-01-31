(function() {
    'use strict';

    angular
        .module('common.ui')
        .directive('sideBar', sideBar);

    /** @ngInject */
    function sideBar() {
        return {
            templateUrl: '/layout/sideBar.html',
            restrict: 'AE',
            scope: {},
        }
    }
}());