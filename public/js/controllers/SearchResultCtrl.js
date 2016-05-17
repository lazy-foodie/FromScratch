angular.module('SearchResultCtrl', []).controller('SearchResultController',
	function($scope,  $routeParams, RecipeService) {
	    $scope.tagline = 'Comming Soon... :)';	
		$scope.getTopRecipes = function() {
			var recipes = RecipeService.GetTopRecipes();
			$scope.recipes = recipes;
			//$scope.makecallURL = 
		};
		$scope.searchRecipes = function () {
		    getRecipesByQuery();
		    window.location = "/searchResult";
	    }

	    function getRecipesByQuery() {
	    	$scope.searchQuery = $routeParams.searchQuery;
	    	alert($scope.searchQuery);
	    	RecipeService.GetRecipesByQuery($scope.searchQuery);
	        $scope.searchQuery = "";
	    }
	}
);
