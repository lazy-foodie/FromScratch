// angular.module('MainCtrl', []).controller('MainController', function($scope) {
// 	$scope.tagline = 'Comming Soon... :)';	
// });


angular.module('MainCtrl', []).controller('MainController', function($scope, RecipeService) {
    $scope.tagline = 'Comming Soon... :)';	
	$scope.items =[];
	$scope.items = RecipeService.getAllRecipes();

});