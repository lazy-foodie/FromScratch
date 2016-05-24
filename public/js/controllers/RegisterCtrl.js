// angular.module('RegisterCtrl', []).controller('RegisterController', function($scope) {
// 	$scope.tagline = 'Your Profile Is Coming Soon... :)';	

// });


angular.module('RegisterCtrl', []).controller('RegisterCtrl', ['$scope', '$location', 'UserService', function($scope, $location, UserService){
    $scope.registerForm = {};
  	$scope.error = false;

  	$scope.register = function(){
  		register();
  	}; 

    function register() {
        alert("user.first_name: " + $scope.registerForm.first_name + "\nuser.last_name: " + $scope.registerForm.last_name + "\nuser.email: " + $scope.registerForm.email+ "\nuser.password: " + $scope.registerForm.password + "\nuser.agreement: " + $scope.registerForm.agreement);

        UserService.Register($scope.registerForm)    
        .then(function(data) {
            $location.path('/login');
            // $scope.disabled = false;
            $scope.registerError = false;
            $scope.registerForm = {};
        }, function(error) {
            console.log('RegisterController.js: error logining: ' + error);
            $scope.error = true;
            $scope.errorMessage = 'Something went wrong';
            // $scope.disabled = true;
            $scope.registerForm = {};
        })  
    }
}]);