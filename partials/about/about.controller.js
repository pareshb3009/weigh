(function() {
    "use strict";
    var aboutController = function($scope, $location, $state, $http, $interval, homeFactory, $stateParams) {
      //$('html,body').animate({scrollTop:0},'slow');return false;

      var a = $stateParams
      if($stateParams.section == 'whyus')
      {
      	$('html, body').animate({scrollTop: $('.whyus').offset().top}, 'slow');return false;
      }
      if($stateParams.section == 'whoareyou')
      {
      	$('html, body').animate({scrollTop: $('.whoareyou').offset().top}, 'slow');return false;
      }
      if($stateParams.section == 'whatwedo')
      {
      	$('html, body').animate({scrollTop: $('.whatwedo').offset().top}, 'slow');return false;
      }
      
      
    };

    

    angular.module('home')
        .controller('aboutController', aboutController);

})();
