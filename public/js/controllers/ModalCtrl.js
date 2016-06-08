var mymodal = angular.module('ModalCtrl', []);

mymodal.controller('ModalController', function ($scope) {
    $scope.showModal = false;
    $scope.recipe_id = "";
    $scope.toggleModal = function(data){
        $scope.recipe_id = data;
        $scope.showModal = true;
    };
    
    $scope.ok = function () {
        var url ='/api/favorites'+'/bich@gmail.com/'+ $scope.recipe_id;
        return $http.delete(url).then(handleSuccess, handleError);
        alert('deleting recipe id: ' + $scope.recipe_id);
        $scope.showModal =false;
    };

    $scope.cancel = function() {         
        $scope.showModal =false;
    };
     
  });

mymodal.directive('modal', function () {
    return {
      template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">Deleting Favorite Recipe</h4>' + 
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
  