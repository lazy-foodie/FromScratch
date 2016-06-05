angular.module('LoginCtrl', []).controller('LoginController', ['$scope', '$location', 'UserService', function($scope, $location, UserService){
  	$scope.userLogin = {};
  	$scope.error = false;
    $scope.errorMessage ='';
    $scope.submitted = false;

  	$scope.login = function(isValid){
        $scope.submitted = true;
        $scope.dataloading = true;
        if (!isValid) {
            console.log('\n Invalid form');
            return;
        }
        login();
  	}; 

    $scope.logout = function() {
        logout();
    }

    function login() {
        console.log("Valid Form: \nuserLogin.email: " + 
            $scope.userLogin.email + 
            "\nuserLogin.password: " + 
            $scope.userLogin.password);
        UserService.Login($scope.userLogin)    
        .then(function(data) {
            $location.path('/');
            $scope.userLogin = {};
            $scope.submitted = false;
        }, function(error) {
            console.log('LoginController.js: error logining: ' + error);
            $scope.error = true;
            $scope.errorMessage = 'Invalid username and/or password';
            $scope.userLogin.password = '';
            $scope.submitted = false;
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