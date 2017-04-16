(function(){
    "use strict";
    
	angular.module('products',[]);

	angular.module('products')
	

	var Routes = function($stateProvider){
		$stateProvider
	  	.state('main.products',
		{
			url:'/products',
			views : {
                "menuContent" : {
                    "templateUrl" : "partials/products/products.html",
                    "controller" : "productsController"
                }
            }
		});
		

  	};

  	angular.module('products')
    	.config(Routes)
    	

    	

})();

