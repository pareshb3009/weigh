(function() {
    "use strict";
    var homeController = function($scope, $location, $state, $http, $interval, homeFactory) {
  		$('.carousel').carousel({
      		interval: 3000
    	})


  		$interval(function() {
            $("#myCarousel").css({'padding-top':($(".container").height()+'px')});
      	}, 100);
    	
      
    };

    

    angular.module('home')
        .controller('homeController', homeController);

})();