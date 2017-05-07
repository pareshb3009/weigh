(function() {
    "use strict";
    var homeController = function($scope, $location, $state, $http, $interval, homeFactory) {
  		$('.carousel').carousel({
      		interval: 3000
    	})


  		$interval(function() {
            $("#myCarousel").css({'padding-top':($(".container").height()+'px')});
            $(".carousel-inner img").css({'height':($("#myCarousel").height()+'px')});


      	}, 100);

      $scope.gotoAbout = function(string){
        $state.go('main.about', { 'section':string })
      }
    	
      
    };

    

    angular.module('home')
        .controller('homeController', homeController);

})();
