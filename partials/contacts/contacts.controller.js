(function() {
    "use strict";
    var contactsController = function($scope, $location, $state, $http, $interval, homeFactory) {
      
      $scope.initMap = function() {
        var uluru = {lat: 19.247111, lng: 73.121637};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: uluru
        });

        var contentString = 'tetdgjsahd gfjhsdghjsh';

        var infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
      }

      $scope.initMap();
      
    };

    

    angular.module('contacts')
        .controller('contactsController', contactsController);

})();
