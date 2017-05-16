(function() {
    "use strict";
    var homeController = function($scope, $location, $state, $http, $interval, homeFactory) {
  		$('.carousel').carousel({
      		interval: 3000
    	})


  		$interval(function() {
            $("#myCarousel").css({'padding-top':($(".container").height()+'px')});
            $("center img").css({'height':($("#myCarousel").height()+'px')});
            $(".thumb img").css({'height':($("#thumbCarousel").height()+'px')});


      	}, 100);

      $scope.gotoAbout = function(string){
        $state.go('main.about', { 'section':string })
      }

      $(document).ready(function() {
        $('#thumbCarousel').carousel({
          interval: 0
        })
          
        $('#thumbCarousel').on('slid.bs.carousel', function() {
          //alert("slid");
        });
      });
    	
      
    };

    

    angular.module('home')
        .controller('homeController', homeController);

})();
