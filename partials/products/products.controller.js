(function() {
    "use strict";
    var productsController = function($scope, $location, $state, $http, $interval, homeFactory) {
      $interval(function() {
            $(".paddingHeader").css({'padding-top':($(".container").height()+'px')});
            


      	}, 100);
      
    };

    

    angular.module('products')
        .controller('productsController', productsController);

})();
