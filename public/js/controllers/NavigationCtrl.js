angular.module('NavigationCtrl', []).controller('NavigationController', function($scope, $rootScope, UserService) {
	 // $rootScope.currentUser = {firstName:'Bich', lastName:'Diep'};

	// $scope.isLoggedIn = UserService.IsLoggedIn();
	// $scope.currentUser = UserService.CurrentUser();
	$scope.logout = function() {
        logout();
    }

    function logout() {
        $rootScope.currentUser = null;
        UserService.Logout()  
        .then(function(data) {
            $location.path('/');
        }, function(error) {
            console.log('Error loging out: ' + error);
        })    
    }

    // $scope.logout = function() {
    //     $http.post("/logout")
    //         .then(function() {
    //             $rootScope.currentUser = null;
    //             $location.url("/");
    //         }, function(error) {
    //             console.log('Error loging out: ' + error);
    //         })
    // }
    
});