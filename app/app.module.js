(function () {
    var app = angular.module('app', ['ngMaterial', 'ngRoute']);

    app.config(['$routeProvider', '$mdThemingProvider', function ($routeProvider, $mdThemingProvider) {
        $routeProvider.when('/', {
            templateUrl: 'app/main.html',
            controller: 'MainController',
            controllerAs: 'Main'
        })
            .otherwise('/');

        // Configure theme
        var customPrimary = {
            '50': '#4f5776',
            '100': '#454c67',
            '200': '#3b4158',
            '300': '#303649',
            '400': '#262a39',
            '500': '#1C1F2A',
            '600': '#12141b',
            '700': '#08080b',
            '800': '#000000',
            '900': '#000000',
            'A100': '#596386',
            'A200': '#636e95',
            'A400': '#717ba1',
            'A700': '#000000'
        };
        $mdThemingProvider
            .definePalette('customPrimary',
            customPrimary);

        var customAccent = {
            '50': '#2b2366',
            '100': '#332979',
            '200': '#3b308c',
            '300': '#43369f',
            '400': '#4b3db2',
            '500': '#5648c1',
            '600': '#796ecd',
            '700': '#8b81d4',
            '800': '#9c94da',
            '900': '#aea7e1',
            'A100': '#796ecd',
            'A200': '#685BC7',
            'A400': '#5648c1',
            'A700': '#c0bae7'
        };
        $mdThemingProvider
            .definePalette('customAccent',
            customAccent);


        var customBackground = {
            '50': '#ffffff',
            '100': '#ffffff',
            '200': '#ffffff',
            '300': '#ffffff',
            '400': '#fcfcfd',
            '500': '#EDEEF2',
            '600': '#dee0e7',
            '700': '#cfd2dd',
            '800': '#c1c4d2',
            '900': '#b2b6c7',
            'A100': '#ffffff',
            'A200': '#ffffff',
            'A400': '#ffffff',
            'A700': '#a3a8bd'
        };
        $mdThemingProvider
            .definePalette('customBackground',
            customBackground);

        $mdThemingProvider.theme('default')
            .primaryPalette('customPrimary')
            .accentPalette('customAccent')
            .backgroundPalette('customBackground');

    }]);
})(); 
