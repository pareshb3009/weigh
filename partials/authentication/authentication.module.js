(function(){
    "use strict";
	angular.module('authentication',[]);

	angular.module('authentication')
	.value('user',JSON.parse(localStorage.getItem('user')) || {})
	.value('successURL',"/")
	.value('successState',"main.home")
	.value('failURL',"#")

	var Routes = function($stateProvider){
		$stateProvider
	  	.state('login',
		{
			url:'/login',
			templateUrl:'partials/authentication/login.html',
			controller:'authenticationController'
		});

  	};

  	angular.module('authentication')
    	.config(Routes)
    	.run(function ($rootScope, $location, user, $http, $templateCache,$state) {
        // keep user logged in after page refresh
    		
	    

	            
        });

    	

})();

