(function(){
    "use strict";
    
	angular.module('error',[]);

	angular.module('error')
	

	var Routes = function($stateProvider){
		$stateProvider
	  	.state('main.error',
		{
			url:'/error',
			views : {
                "menuContent" : {
                    "templateUrl" : "partials/404/404.html",
                    "controller" : "errorController"
                }
            }
		});
		

  	};

  	angular.module('error')
    	.config(Routes)
    	

    	

})();

