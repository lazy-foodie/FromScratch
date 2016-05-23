angular.module('LoginCtrl', []).controller('LoginController', function($scope, $location, UserService){
  	$scope.user = {};
  	$scope.error = false;

  	$scope.login = function(){
  		alert("\nuser.email: " + $scope.user.email+ "\nuser.password: " + $scope.user.password);
  		
    	UserService.Login($scope.user).error(function(error){
      		console.log('RegisterController.js: error logining:', error);
      		$scope.error = error;
    	}).then(function(){
      		$location.path('/');
    	});
  	}; 
});