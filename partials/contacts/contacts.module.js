(function(){
    "use strict";
    
	angular.module('contacts',[]);

	angular.module('contacts')
	

	var Routes = function($stateProvider){
		$stateProvider
	  	.state('main.contacts',
		{
			url:'/contacts',
			views : {
                "menuContent" : {
                    "templateUrl" : "partials/contacts/contacts.html",
                    "controller" : "contactsController"
                }
            }
		});
		

  	};

  	angular.module('contacts')
    	.config(Routes)
    	

    	

})();

