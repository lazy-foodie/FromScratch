angular.module('FavRecipeCtrl', []).controller('FavoriteRecipesController', function($scope, $route, FavRecipeService) {
	/*$scope.showModal = false;*/

	$scope.tagline = 'Your Favorite Recipe List Is Coming Soon... :)';	
	FavRecipeService.GetTestData()
		.then(function(data) {
			$scope.testData = data;
		}, function(error) {
			alert('error' + error);
		})
});

	// var confirmed=false;
	// $scope.confirmDelete =funtion(){
	// 	confirmed = true;
	// };
	/*$scope.deleteImage = function() {
		alert('button clicked');
		$scope.showModal = true;
		alert($scope.showModal);
		// if (confirmed) {
		// 	// delete();
		// 	$scope.showModal = false;
		// 	confirmed = false;
		// } else {
		// 	$scope.showModal = false;
		// }
	};*/
	// function delete() {
	// 	//var id = item.attributes["data-id"].value;
	// 	//alert("_id for image is: " + id);
	// };
/*
$scope.showModal = false;
    $scope.recipe_id = "";
    $scope.toggleModal = function(data){
        $scope.recipe_id = data;
        $scope.showModal = !$scope.showModal;
    };
    
    $scope.ok = function () {
    alert('deleting');
            $scope.showModal =false;
            //$http.delete(url, $scope.recipe_id)
    };
    $scope.cancel = function() {
        alert('cancel');            
        $scope.showModal =false;
    };
  });

FavoriteRecipesController.directive('modal', function () {
    return {
      template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">{{ recipe_id }} clicked!!</h4>' + 
              '</div>' + 
              '<div class="modal-body" ng-transclude></div>' + 
            '</div>' +
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
          scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });
  

*/