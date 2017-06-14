(function() {
    'use strict';

    angular
        .module('movies')
        .controller('RentalsCtrl', RentalsCtrl)

    /** @ngInject */
    function RentalsCtrl() {
        var vm = this;

        init();

        function init() {}

    }

}());