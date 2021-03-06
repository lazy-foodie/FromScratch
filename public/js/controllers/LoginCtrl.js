var login = angular.module('LoginCtrl', []).controller('LoginController', ['$scope', '$location', 'UserService', function($scope, $location, UserService){
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

    function login() {
        console.log("Valid Form: \nuserLogin.email: " + 
            $scope.userLogin.email + 
            "\nuserLogin.password: " + 
            $scope.userLogin.password);
        UserService.Login($scope.userLogin)    
        .then(handleSuccess, handleError);  
    };

    $scope.signInWithFaceBook = function signInWithFaceBook() {
        alert('signing in with facebook');
        UserService.FacebookLogin()    
        .then(handleSuccess, handleError);  
    };

    /*****************************************/
    /* Helper private methods for error handling */
    /*****************************************/
    function handleError(error) {
        console.log('LoginController.js: error logining: ' + error);
        $scope.error = true;
        // $scope.errorMessage = 'Invalid username and/or password';
        $scope.errorMessage = error;
        $scope.userLogin.password = '';
        $scope.submitted = false;
    }

    function handleSuccess(response) {
        $location.path('/');
        $scope.userLogin = {};
        $scope.submitted = false;
    }
}]);