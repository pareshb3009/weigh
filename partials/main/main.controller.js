    (function() {
    "use strict";

    angular.module('webApp')
        .controller('MainCtrl', ['$scope', '$interval', '$state', '$location', MainCtrl]);

    function MainCtrl($scope, $interval, $state, $location, user) {
        $scope.gotoServices = function(string){
	        $state.go('main.services', { 'section':string })
      	}
        $scope.gotoProduct = function(string){
          $state.go('main.products.weighscales',{},{reload:true})
        }
      	$('html,body').animate({scrollTop:0},'slow');return false;
        
    }

})();
