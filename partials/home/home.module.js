(function(){
    "use strict";
    
	angular.module('home',[]);

	angular.module('home')
	

	var Routes = function($stateProvider){
		$stateProvider
	  	.state('main.home',
		{
			url:'/home',
			views : {
                "menuContent" : {
                    "templateUrl" : "partials/home/home.html",
                    "controller" : "homeController"
                }
            }
		});
		

  	};

  	angular.module('home')
    	.config(Routes)
    	

    	

})();

