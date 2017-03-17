(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);
    MainController.$inject = ['$mdSidenav'];

    function MainController($mdSidenav) {
        var vm = this;

        // Any logic that needs to run when the controller loads should be placed here.
        vm.profileOpened = true;
        
        vm.test = 'center';

        // Define functions here
        vm.toggleProfile = function() {
            vm.profileOpened = !vm.profileOpened;
        };
    }
})();