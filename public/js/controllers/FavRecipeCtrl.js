angular.module('FavRecipeCtrl', []).controller('FavoriteRecipesController', function($scope, $route, FavRecipeService) {

	$scope.tagline = 'Your Favorite Recipe List Is Coming Soon... :)';	
	FavRecipeService.GetTestData()
		.then(function(data) {
			$scope.testData = data;
		}, function(error) {
			alert('error' + error);
		})

	$scope.close = function() {
  		var Dlg = document.getElementById("Overlay");
  		Dlg.style.visibility = "hidden";
  	};

	$scope.confirmation = function() {
		  var Dlg = document.getElementById("Overlay");
  		  Dlg.style.visibility = "visible";
  		  $scope.delete = function() {
			$route.reload();
  		  }
	};
});
