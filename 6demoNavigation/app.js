var MainApp = angular.module('mainModule', ['ngRoute'])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: './home/home.html',
                    controller: 'HomeController'
                })
                .when('/simple/:simpleParam', {
                    templateUrl: './paramSimple/paramSimple.html',
                    controller: 'ParamSimpleController'
                })
                .when('/slashes/:slashesParam*', {
                    templateUrl: './paramSlashes/paramSlashes.html',
                    controller: 'ParamSlashesController'
                })
                .when('/optional/:optionalParam?', {
                    templateUrl: './paramOptional/paramOptional.html',
                    controller: 'ParamOptionalController'
                })

            ;
        })
        .controller('MainController', function ($scope, $location) {

            $scope.navigateToSimple = function () {
                $location.path('simple/567');
            }
        })
    ;