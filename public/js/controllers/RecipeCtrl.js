angular.module('RecipeCtrl', []).controller('RecipeController', function($scope, $routeParams, RecipeService) {
    $scope.tagline = 'Your Recipe Detail Is Coming Soon... :)';
	$scope.recipe_id = $routeParams.recipeId;
	$scope.getRecipeDetail = function() { RecipeService.GetRecipeById($scope.recipe_id).success(function(recipeDetail) {
		//$scope.recipeDetail = recipeDetail;
		$scope.totalTime = recipeDetail.totalTime;
        $scope.recipeName = recipeDetail.name;
		$scope.rating = recipeDetail.rating;
		$scope.numberOfServings = recipeDetail.numberOfServings;
		$scope.sourceDisplayName = recipeDetail.source.sourceDisplayName;
        $scope.sourceSiteUrl= recipeDetail.source.sourceSiteUrl;
        $scope.sourceRecipeUrl = recipeDetail.source.sourceRecipeUrl;
        $scope.ingredients = recipeDetail.ingredientLines.toString();
        $scope.images = recipeDetail.images;
        $scope.hostedLargeUrl = $scope.images[0].hostedLargeUrl;
        $scope.hostedSmallUrl = $scope.images[0].hostedSmallUrl;

        // $scope.displayImages =  recipeDetail.images.length();

	}); 
};

}); 