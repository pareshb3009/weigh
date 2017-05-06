(function() {
    "use strict";
    var servicesController = function($scope, $location, $state, $http, $interval, homeFactory) {
      $interval(function() {
            $(".paddingHeader").css({'padding-top':($(".container").height()+'px')});
            


      	}, 100);
      
    };

    

    angular.module('services')
        .controller('servicesController', servicesController);

})();
