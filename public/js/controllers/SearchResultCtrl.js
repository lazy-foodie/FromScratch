angular.module('SearchResultCtrl', []).controller('SearchResultController', function($scope, $routeParams, $rootScope, RecipeService) {

	    $scope.searchRecipes = function () {

         RecipeService.GetRecipesByQuery($routeParams.searchQuery)
		.then(function(data) {
			$scope.searchRes = data.matches;
			//alert(searchRes);
		}, function(error) {
			alert('Error getting top recipes from yummly: ' + error);
		})

      };
	}
);
