(function() {
    "use strict";
    var servicesController = function($scope, $location, $state, $http, $interval, homeFactory, $stateParams) {
      	$interval(function() {
            $(".paddingHeader").css({'padding-top':($(".container").height()+'px')});
        }, 100);

        $scope.section = $stateParams.section;
    };

    

    angular.module('services')
        .controller('servicesController', servicesController);

})();
