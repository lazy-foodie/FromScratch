var myModule = angular.module('SearchResultCtrl', []);
myModule.controller('SearchResultController', function($scope, $routeParams, $rootScope, RecipeService) {
    $scope.searchRes = [];

    $scope.searchRecipes = function () {
		searchRecipes($routeParams.searchQuery);
    };

	$scope.searchRecipesInSearch = function() {
		searchRecipes($scope.search.Query);
	};

    function searchRecipes(query) {
         RecipeService.GetRecipesByQuery(query)
		.then(function(data) {
			$scope.searchRes = data.matches;
		}, function(error) {
			alert('Error getting top recipes from yummly: ' + error);
		})
  	};
});
