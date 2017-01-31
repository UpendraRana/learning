(function() {
    'use strict';

    angular
        .module('movies')
        .controller('DetailsCtrl', DetailsCtrl)

    /** @ngInject */
    function DetailsCtrl($routeParams) {
        var vm = this;
        vm.id = $routeParams.id;
    }

}());