
angular.module('MainCtrl', []).controller('MainController',function($scope,  $rootScope,$routeParams, $http, RecipeService, $location) {
	
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
		searchRecipes();
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

    function searchRecipes() {
    	var url = '/searchResult/' + $scope.search.Query;
		$location.path(url);
    }

});

