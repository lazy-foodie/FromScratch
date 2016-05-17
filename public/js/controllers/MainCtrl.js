
angular.module('MainCtrl', []).controller('MainController',function($scope,  $rootScope, $http, RecipeService) {
    /*****************************************/
    /* Initialze variables */
    /*****************************************/
	$scope.recipes = [];
	
	/*****************************************/
	/* Public methods */
	/*****************************************/
	$scope.getTopRecipes = function() {
		getTopRecipes();

	};
	$scope.searchRecipes = function () {
		getRecipesByQuery();
    };

    /*****************************************/
    /* Helper private methods */
    /*****************************************/
    function getTopRecipes() {
    	RecipeService.GetTopRecipes()
		.then(function(data) {
			$scope.recipes = data.matches;
		}, function(error) {
			console.log('Error getting top recipes from yummly: ' + error);
		})	
    }
    function getRecipesByQuery() {
        RecipeService.GetRecipesByQuery($scope.searchQuery)
		.then(function(data) {
			$scope.recipes = data.matches;
			$scope.searchQuery = "";
		}, function(error) {
			console.log('Error getting top recipes from yummly: ' + error);
		})	
    };
	}
);
