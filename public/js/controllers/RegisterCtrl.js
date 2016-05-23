// angular.module('RegisterCtrl', []).controller('RegisterController', function($scope) {
// 	$scope.tagline = 'Your Profile Is Coming Soon... :)';	

// });


angular.module('RegisterCtrl', []).controller('RegisterController', function($scope, $location, UserService){
  	$scope.user = {};
  	$scope.error = false;

  	$scope.register = function(){
  		alert("user.full_name: " + $scope.user.full_name + "\nuser.email: " + $scope.user.email+ "\nuser.password: " + $scope.user.password + "\nuser.agreement: " + $scope.user.agreement);

    	UserService.Register($scope.user).error(function(error){
      		console.log('RegisterController.js: error registering:', error);
      		$scope.error = error;
    	}).then(function(){
      		$location.path('/');
    	});
  	}; 
});