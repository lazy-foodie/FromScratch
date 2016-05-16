angular.module('MainCtrl', []).controller('MainController',
	function($scope,  $rootScope, RecipeService) {
	    $scope.tagline = 'Comming Soon... :)';	
		$scope.getTopRecipes = function() {
			var recipes = RecipeService.GetTopRecipes();
			$scope.recipes = recipes;
			// $rootScope.listRecipes = listRecipes;
		}
		$scope.searchRecipes = function () {
			getRecipesByQuery();
	    }

	    function getRecipesByQuery() {
	    	RecipeService.GetRecipesByQuery($scope.searchQuery);
	        $scope.searchQuery = "";
	    }
	}
);