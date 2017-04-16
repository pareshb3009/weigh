(function(){
    "use strict";
    
	angular.module('privacy',[]);

	angular.module('privacy')
	

	var Routes = function($stateProvider){
		$stateProvider
	  	.state('main.privacy',
		{
			url:'/privacy',
			views : {
                "menuContent" : {
                    "templateUrl" : "partials/privacy/privacy.html",
                    "controller" : "privacyController"
                }
            }
		});
		

  	};

  	angular.module('privacy')
    	.config(Routes)
    	

    	

})();

