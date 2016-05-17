angular.module('MainCtrl', []).controller('MainController',
	function($scope,  $rootScope, RecipeService) {
	    $scope.tagline = 'Comming Soon... :)';	
		$scope.getTopRecipes = function() {
			var recipes = RecipeService.GetTopRecipes();
			$scope.recipes = recipes;
			//$scope.makecallURL = 
		};
		$scope.searchRecipes = function () {
		   getRecipesByQuery();
		    window.location = "/searchResult";
		    alert(window.location);
	    }

	    function getRecipesByQuery() {
	    	alert($scope.searchQuery);
	    	RecipeService.GetRecipesByQuery($scope.searchQuery);
	        $scope.searchQuery = "";
	    }
	}
);
