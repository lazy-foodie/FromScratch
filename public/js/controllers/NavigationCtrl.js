angular.module('NavigationCtrl', []).controller('NavigationController', function($scope, UserService) {
	
	$scope.isLoggedIn = UserService.IsLoggedIn();
	$scope.currentUser = UserService.CurrentUser();
	$scope.logout = function() {
        logout();
    }

    function logout() {
        UserService.Logout()  
        .then(function(data) {
            $location.path('/login');
        }, function(error) {
            console.log('Error loging out: ' + error);
        })    
    }
});