// public/js/controllers/NerdCtrl.js
// angular.module('NerdCtrl', []).controller('NerdController', function($scope, NerdService) {

//     $scope.tagline = 'Nothing beats a pocket protector!';
//   //   NerdService.getTestData().success(function(recipes) {
// 		// $scope.testData = recipes.matches;
//   //   }
// });


angular.module('NerdCtrl', []).controller('NerdController', function($scope, $http) {

    $scope.tagline = 'Nothing beats a pocket protector!';
    $scope.recipes = [];
 	// $scope.recipes = NerdService.GetTestData().matches;
 	//  NerdService.GetTestData().success(function(res) {
  //           $scope.recipes = res.matches;
  // }).error(function() {
  //   console.log("error getting recipes");
  // });

	var url = "http://api.yummly.com/v1/api/recipes?_app_id=d6f2e548&_app_key=0ef41e85e08ae10a1015801376315497&&requirePictures=true&maxResult=12";
 	$http.get(url)
 	.success(function(res) {
 		$scope.recipes = res.matches;
 	}).error(function() {
 		console.log("error getting recipes");
 	});

});