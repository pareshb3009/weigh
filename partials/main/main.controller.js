    (function() {
    "use strict";

    angular.module('webApp')
        .controller('MainCtrl', ['$scope', '$interval', '$state', '$location', MainCtrl]);

    function MainCtrl($scope, $interval, $state, $location, user) {
        $scope.gotoServices = function(string){
	        $state.go('main.services', { 'section':string })
      	}
      	$('html,body').animate({scrollTop:0},'slow');return false;
        
    }

})();
