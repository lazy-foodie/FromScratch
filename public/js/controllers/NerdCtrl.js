angular.module('NerdCtrl', []).controller('NerdController', function($scope, NerdService) {

    $scope.tagline = 'Nothing beats a pocket protector!';

	NerdService.GetTestData()
		.then(function(data) {
			$scope.testData = data;
		}, function(error) {
			console.log('error' + error);
		})
});