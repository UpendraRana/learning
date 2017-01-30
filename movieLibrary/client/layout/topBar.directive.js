(function() {
    'use strict';

    angular
        .module('common.ui')
        .directive('topBar', topbar);


    /** @ngInject */
    function topbar() {
        return {
            templateUrl: '/layout/topBar.html',
            restrict: 'E',
            replace: true
        };
    };
}());