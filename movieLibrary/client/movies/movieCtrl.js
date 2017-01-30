(function() {
    'use strict';

    angular
        .module('movies')
        .controller('MovieCtrl', MovieCtrl);

    /** @ngInject */
    function MovieCtrl() {
        var vm = this;
        vm.movies = [{
                title: 'Titile 1',
            },
            {
                title: 'Titile 2',
            },
        ];
        vm.click = function(e) {
            console.log(e);
        };
    };

}());