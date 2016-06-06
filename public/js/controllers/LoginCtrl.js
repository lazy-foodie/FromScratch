angular.module('LoginCtrl', []).controller('LoginController', ['$scope', '$location', 'UserService', function($scope, $location, UserService){
  	$scope.loginForm = {};
  	$scope.error = false;
    // $scope.disabled = false;

  	$scope.login = function(){
        login();
  	}; 

    $scope.logout = function() {
        logout();
    }

    function login() {
        alert("\nloginForm.email: " + $scope.loginForm.email+ "\nloginForm.password: " + $scope.loginForm.password);
        UserService.Login($scope.loginForm)    
        .then(function(data) {
            $location.path('/');
            // $scope.disabled = false;
            $scope.loginForm = {};
        }, function(error) {
            console.log('RegisterController.js: error logining: ' + error);
            $scope.error = true;
            $scope.errorMessage = 'Invalid username and/or password';
            // $scope.disabled = true;
            $scope.loginForm.password = '';
        })  
    }

    function logout() {
        UserService.Logout()  
        .then(function(data) {
            $location.path('/login');
        }, function(error) {
            console.log('Error loging out: ' + error);
        })    

    }
}]);