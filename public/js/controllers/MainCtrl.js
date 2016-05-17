angular.module('MainCtrl', []).controller('MainController',
	function($scope,  $routeParams, RecipeService) {
	    $scope.tagline = 'Comming Soon... :)';
	    $scope.input = 	$routeParams.input;
		$scope.getTopRecipes = function() {
			var recipes = RecipeService.GetTopRecipes();
			$scope.recipes = recipes.matches;
			//$scope.makecallURL = 
		};
		$scope.searchRecipes = function () {
		   getRecipesByQuery();
		   alert($scope.input);
		   window.location = "/searchResult/"+ $scope.input;
	    }

	    function getRecipesByQuery() {
	    	alert($scope.input);
	    	RecipeService.GetRecipesByQuery($scope.input);
	        //$scope.searchQuery = "";
	    }
	}
);
