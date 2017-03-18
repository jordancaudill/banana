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
        
        // Define functions here
        vm.toggleProfile = function() {
            vm.profileOpened = !vm.profileOpened;
        };

        vm.openProfile = function() {
            vm.profileOpened = true;
            $mdSidenav('profile').toggle();
        }

        vm.openNotifications = function() {
            $mdSidenav('notifications').toggle();
        }

    }
})();