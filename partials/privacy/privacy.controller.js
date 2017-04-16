(function() {
    "use strict";
    var privacyController = function($scope, $location, $state, $http, $interval, homeFactory) {
      
      $('html,body').animate({scrollTop:0},'slow');return false;
    };

    

    angular.module('privacy')
        .controller('privacyController', privacyController);

})();
