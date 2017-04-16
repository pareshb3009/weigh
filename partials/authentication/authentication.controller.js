(function() {
    "use strict";
    var authenticationController = function($scope, $location, $state, authenticationFactory, user) {
        $scope.user = user;
        //console.dir(user);


        /*
            user = {"authdata":"$2a$05$W2TzKlkfYoPBXD2F2JDoA.4nx5HBULXZZapL7d5k.IVRpn4KXI7.i"}
         */
        $scope.login = function() {
            authenticationFactory.login().then(
                function(result) {
                    //$location.path(result);
                    $state.go(result);
                },
                function(error) {
                    if (typeof error == "string") {
                        // alert('Error : ' + error);
                        alertify.alert("Message");
                    } else {
                        // alert(error.message);
                        alertify.alert("Message");
                    }
                });

        }

        $scope.signUp = function() {

        }

        $scope.logout = function() {

        }
    };

    angular.module('authentication')
        .controller('authenticationController', authenticationController);

})();
