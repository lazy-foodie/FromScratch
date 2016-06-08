
angular.module('FavRecipeCtrl', []).controller('FavoriteRecipesController', function($scope, $route, FavRecipeService) {

	FavRecipeService.GetTestData()
		.then(function(data) {
			$scope.testData = data;
		}, function(error) {
			alert('error' + error);
		});
    
});