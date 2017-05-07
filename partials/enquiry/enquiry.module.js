(function(){
    "use strict";
    
	angular.module('enquiry',[]);

	angular.module('enquiry')
	

	var Routes = function($stateProvider){
		$stateProvider
	  	.state('main.enquiry',
		{
			url:'/enquiry',
			views : {
                "menuContent" : {
                    "templateUrl" : "partials/enquiry/enquiry.html",
                    "controller" : "enquiryController"
                }
            }
		});
		

  	};

  	angular.module('enquiry')
    	.config(Routes)
    	

    	

})();

