(function(){
    "use strict";
    
	angular.module('news',[]);

	angular.module('news')
	

	var Routes = function($stateProvider){
		$stateProvider
	  	.state('main.news',
		{
			url:'/news',
			views : {
                "menuContent" : {
                    "templateUrl" : "partials/news/news.html",
                    "controller" : "newsController"
                }
            }
		});
		

  	};

  	angular.module('news')
    	.config(Routes)
    	

    	

})();

