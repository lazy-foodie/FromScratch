
angular.module('MainCtrl', []).controller('MainController',function($scope,  $rootScope,$routeParams, $http, RecipeService) {
	
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
       
		window.location = "/searchResult/" + $scope.search.Query;

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

	}
);
