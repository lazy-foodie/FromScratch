angular.module('NavigationCtrl', []).controller('NavigationController', function($scope, UserService) {
	
	$scope.isLoggedIn = UserService.IsLoggedIn();
	$scope.currentUser = UserService.CurrentUser();
});