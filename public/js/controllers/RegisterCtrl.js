// angular.module('RegisterCtrl', []).controller('RegisterController', function($scope) {
// 	$scope.tagline = 'Your Profile Is Coming Soon... :)';	

// });


angular.module('RegisterCtrl', []).controller('RegisterController', ['$scope', '$location', 'UserService', function($scope, $location, UserService){
    $scope.userRegister = {};
  	$scope.error = false;
    $scope.errorMessage ='';
    $scope.submitted = false;

  	$scope.register = function(isValid){
        $scope.submitted = true;
        if (!isValid) {
            console.log('\n Invalid form');
            return;
        }
  		register();
  	}; 

    function register() {
        console.log("Valid Form:\nuserRegister.first_name: " + 
            $scope.userRegister.first_name + 
            "\nuserRegister.last_name: " + 
            $scope.userRegister.last_name + 
            "\nuserRegister.email: " + 
            $scope.userRegister.email+ 
            "\nuserRegister.password: " + 
            $scope.userRegister.password);

        UserService.Register($scope.registerForm)    
        .then(function(data) {
            $location.path('/login');
            $scope.registerError = false;
            $scope.userRegister = {};
            $scope.submitted = false;
        }, function(error) {
            console.log('RegisterController.js: error logining: ' + error);
            $scope.error = true;
            $scope.errorMessage = 'Something went wrong';
            $scope.userRegister = {};
            $scope.submitted = false;
        })  
    }
}]);