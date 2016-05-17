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
		    window.location = "/views/searchResultView.html";
	    }

	    function getRecipesByQuery() {
	    	RecipeService.GetRecipesByQuery($scope.searchQuery);
	        $scope.searchQuery = "";
	    }
	}
);
