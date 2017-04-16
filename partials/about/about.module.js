(function(){
    "use strict";
    
	angular.module('about',[]);

	angular.module('about')
	

	var Routes = function($stateProvider){
		$stateProvider
	  	.state('main.about',
		{
			url:'/about',
			views : {
                "menuContent" : {
                    "templateUrl" : "partials/about/about.html",
                    "controller" : "aboutController"
                }
            }
		});
		

  	};

  	angular.module('about')
    	.config(Routes)
    	

    	

})();

