angular.module('UserCtrl', []).controller('UserController', function($scope, $rootScope, UserService) {
	$scope.tagline = 'Your Profile Is Coming Soon... :)';	
	$scope.singleUser = {};
	UserService.GetTestData()
		.then(function(data) {
			$scope.testData = data;
		}, function(error) {
			alert('error' + error);
		});
	UserService.GetUserById("57399eabdcba0f089283c6e1")
		.then(function(data) {
			$scope.singleUser = data;
		}, function(error) {
			alert('error' + error);
		});
});