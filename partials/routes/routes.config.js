(function() {

    "use strict";

    /* @ngInject */
    var Routes = function($urlRouterProvider, $stateProvider) {
        $stateProvider

            .state('main', {
            url: '/main',
            abstract: true,
            templateUrl: 'partials/main/main.html',
            controller: 'MainCtrl'
        });

        $urlRouterProvider.otherwise('main/home');
    };

    angular.module('routes')
        .config(Routes);
})();

var loaderTrue = true;
var loaderFalse = false;