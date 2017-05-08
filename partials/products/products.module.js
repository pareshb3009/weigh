(function(){
    "use strict";
    
	angular.module('products',[]);

	angular.module('products')
	

	var Routes = function($stateProvider){
		$stateProvider
	  	.state('main.products',
		{
			url:'/products',
			abstract: true,
			views : {
                "menuContent" : {
                    "templateUrl" : "partials/products/products.html",
                    "controller" : "productsController"
                }
            }
		})
		.state('main.products.weighscales',
		{
			url:'/weighscales',
			views : {
                "menuContent" : {
                    "templateUrl" : "partials/products/weighscales.html",
                    "controller" : "productsController"
                }
            }
		})
		.state('main.products.weighsystems',
		{
			url:'/weighsystems',
			views : {
                "menuContent" : {
                    "templateUrl" : "partials/products/weighsystems.html",
                    "controller" : "productsController"
                }
            }
		})
		.state('main.products.utm',
		{
			url:'/utm',
			views : {
                "menuContent" : {
                    "templateUrl" : "partials/products/utm.html",
                    "controller" : "productsController"
                }
            }
		})
		.state('main.products.was',
		{
			url:'/was',
			views : {
                "menuContent" : {
                    "templateUrl" : "partials/products/was.html",
                    "controller" : "productsController"
                }
            }
		});
		

  	};

  	angular.module('products')
    	.config(Routes)
    	

    	

})();

