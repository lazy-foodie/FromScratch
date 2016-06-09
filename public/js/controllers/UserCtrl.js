angular.module('UserCtrl', []).controller('UserController', function($scope, $rootScope, UserService) {
	$scope.singleUser = {};
	UserService.GetTestData()
		.then(function(data) {
			$scope.testData = data;
		}, function(error) {
			alert('error' + error);
		});
	UserService.GetUserById("5758c9091519199416b74624")
		.then(function(data) {
			$scope.singleUser = data;
		}, function(error) {
			alert('error' + error);
		});
});

