angular.module('RecipeCtrl', []).controller('RecipeController', function($scope, $routeParams, RecipeService) {
	// $scope.items =[];
	// var items = RecipeService.GetAllRecipes();
	// $scope.items = items;
    $scope.tagline = 'Your Recipe Detail Is Coming Soon... :)';
	$scope.recipe_id = $routeParams.recipeId;
	$scope.getRecipeDetail = function() { RecipeService.GetRecipeById($scope.recipe_id).success(function(recipeDetail) {
		$scope.recipeDetail = recipeDetail;
	});
};
});

// angular.module('RecipeCtrl', []).controller('RecipeController', ['$scope', '$rootScope', '$route', 'RecipeService' function($scope, $rootScope, $route, RecipeService) {
//     $scope.tagline = 'Your Recipe Detail Is Coming Soon... :)';	
//    	$scope.recipe_id = $routeParams.recipeId;	
// 	$scope.getRecipeDetail = function() {
// 		RecipeService.GetRecipeById($scope.recipe_id).success(function(recipeDetails) {
// 			alert
// 			$scope.recipeDetails = recipeDetails;
// 		});
// 	};
// }]);