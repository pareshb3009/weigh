(function(){
  "use strict";

  angular.module('webApp',[
  	'routes',
    'authentication',
  	'home',
    'about',
    'error',
    'services',
    'products',
    'news',
    'contacts',
    'privacy'
])
.value('alerts',[])
.value('webconfig',{})
.run(function ($rootScope, $state) {        
    $rootScope.showLoading = false;
    $rootScope.$state = $state;
});

//Added for date format
angular.module('webApp')
// .config(function(datepickerConfig, datepickerPopupConfig) {
//   datepickerPopupConfig.datepickerPopup = "dd/MM/yyyy";
//   //datepickerPopupConfig.showButtonBar= false;
// });

angular.module('webApp')
.filter('dateRange', function() {
  return function(input, startDate, endDate) {
    
    var retArray = [];
    
    angular.forEach(input, function(obj){
      var dArray = obj.Date.split('.');
      var date = dArray[0];
      var month = dArray[1];
      var year = dArray[2];

      var receivedDate = new Date(month+"-"+date+"-"+year);
      
      if(receivedDate >= startDate && receivedDate <= endDate) {
        retArray.push(obj);     
      }
    }); 
    
    return retArray; 
  };
});

angular.module('webApp').filter("sanitize", ['$sce', function ($sce) {
       return function (htmlCode) {
           return $sce.trustAsHtml(htmlCode);
       }
   }]);
  
})();
var angularFire;
