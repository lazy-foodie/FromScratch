angular.module('FavRecipeCtrl', []).controller('FavoriteRecipesController', function($scope, FavRecipeService) {
	$scope.tagline = 'Your Favorite Recipe List Is Coming Soon... :)';	
	FavRecipeService.GetTestData()
		.then(function(data) {
			$scope.testData = data;
		}, function(error) {
			alert('error' + error);
		})
});
