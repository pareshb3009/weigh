(function() {
    "use strict";
    var contactsController = function($scope, $location, $state, $http, $interval, homeFactory, $window) {
      
      $scope.initMap = function() {
        var uluru = {lat: 19.217470, lng: 73.139171};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: uluru,
          scrollwheel:  false
        });

        var contentString = 'DELTA ELECTRONICS,<br>16, J.M.Apartment, Jyoti Nagar,<br>Opp. Sharda English High School,<br>Chinchpada Road, Kalyan(E).<br>Off. 9930348889 ';

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
        infowindow.open(map, marker);
      }

      $scope.feedback_errors = "";
      $scope.hasError = false;
      $scope.resultMessage;
      $scope.formData = {};
      $scope.submitButtonDisabled = false;
      $scope.submitted = false; //used so that form errors are shown only after the form has been submitted

      var param = function(data) {
        var returnString = '';
        for (var d in data){
          if (data.hasOwnProperty(d))
            returnString += d + '=' + data[d] + '&';
        }
        // Remove last ampersand and return
        return returnString.slice( 0, returnString.length - 1 );
      };

      $scope.submit = function(feedbackForm) {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        if (feedbackForm.$valid) {
          $http({
            method  : 'POST',
            url     : 'email.php',
            data    : param($scope.formData),
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
          }).success(function(data){
            console.log(data);
            if (data.success) {
              $scope.submitButtonDisabled = true;
              $scope.resultMessage = data.message;
            } else {
              $scope.submitButtonDisabled = false;
              $scope.resultMessage = data.message;
            }
          }).error(function(error){
            console.log(error);
          });
        } else {
          $scope.submitButtonDisabled = false;
        }
      }

      // send data to action.php on submit
    $scope.handleFormSubmit = function (feedbackForm) {

            /*----
            Un comment the following lines to enable action.php script
            ----*/
        $http.post('./action.php', feedbackForm).success(function (data, status) {
            if (data.success) {
                $window.alert("Thank you! Your message has been sent.");
                $scope.feedbackForm = {};

                // display success message
                $scope.$parent.message = true;
            }     
        }).error(function (data, status) {
            $window.alert("Sorry, there was a problem!");
        });

      /*----
      Remove the following 2 lines of code to enable action.php script
      ----*/
      // $scope.feedbackForm = {};
      // $scope.$parent.message = true;

    };

      $scope.initMap();


      // $interval(function() {
      //   if($('#iframeTypeForm') && $('#iframeTypeForm').contents())
      //   {
      //     $('#iframeTypeForm').contents().find('.screen .content-wrapper .content .text').css('display','none');
      //     $('#iframeTypeForm').contents().find('.screen .content-wrapper .content .button-wrapper').css('display','none');
      //   }

      // }, 100);

      
      
    };

    

    angular.module('contacts')
        .controller('contactsController', contactsController);

})();
