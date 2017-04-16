(function(){
    "use strict";
    
	angular.module('services',[]);

	angular.module('services')
	

	var Routes = function($stateProvider){
		$stateProvider
	  	.state('main.services',
		{
			url:'/services',
			views : {
                "menuContent" : {
                    "templateUrl" : "partials/services/services.html",
                    "controller" : "servicesController"
                }
            }
		});
		

  	};

  	angular.module('services')
    	.config(Routes)
    	

    	

})();

