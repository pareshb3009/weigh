(function() {
    "use strict";
    var authenticationFactory = function($http, $q, $window, user, $state, $templateCache, successURL, successState, $location, $rootScope) {
        return {
            
        }
    };

    var httpAuthInterceptor = function($q, $location) {
        return {
            response: function(response) {
                if (response.status === 401) {
                    console.log("Response 401");
                }
                return response || $q.when(response);
            },
            responseError: function(rejection) {
                if (rejection.status === 401) {
                    console.log("Response Error 401", rejection);
                    $location.path('/login').search('returnTo', $location.path());
                }
                return $q.reject(rejection);
            }
        }
    }

    angular.module('webApp')
        .factory('authenticationFactory', authenticationFactory)
        .factory('httpAuthInterceptor', httpAuthInterceptor)
        .config(function($httpProvider) {
            $httpProvider.interceptors.push('httpAuthInterceptor');
        })

})();
