(function() {
    "use strict";
    var productsController = function($scope, $location, $state, $http, $interval, homeFactory, $stateParams) {
  		$interval(function() {
            $(".paddingHeader").css({'padding-top':($(".container").height()+'px')});
        }, 100);

      // $('.productHide').css({'display': 'none'})

  		$scope.gotoProduct = function(string){
	        $scope.viewProduct = string
	        $('.productmenucontent').animate({scrollTop:0},'slow');
	        $('html,body').animate({scrollTop:0},'slow');return false;
		}
      
    };

    

    angular.module('products')
        .controller('productsController', productsController);

})();
