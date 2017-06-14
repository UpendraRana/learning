(function() {
    'use strict';

    angular
        .module('movies')
        .controller('DashboardCtrl', DashboardCtrl)

    /** @ngInject */
    function DashboardCtrl() {
        var vm = this;

        init();

        function init() {}

    }

}());