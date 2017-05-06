(function() {
    "use strict";
    var aboutController = function($scope, $location, $state, $http, $interval, homeFactory) {
      $('html,body').animate({scrollTop:0},'slow');return false;

      //$('html, body').animate({scrollTop: $('.eee').offset().top}, 'slow');return false;
      
    };

    

    angular.module('home')
        .controller('aboutController', aboutController);

})();
