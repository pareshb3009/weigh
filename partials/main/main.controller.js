    (function() {
    "use strict";

    angular.module('webApp')
        .controller('MainCtrl', ['$scope', '$interval', '$state', '$location', MainCtrl]);

    function MainCtrl($scope, $interval, $state, $location, user) {
        
    	$('html,body').animate({scrollTop:0},'slow');return false;
        
        
    }

})();
