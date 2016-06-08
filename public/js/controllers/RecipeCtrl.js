angular.module('RecipeCtrl', []).controller('RecipeController', function($scope, $routeParams, $rootScope, RecipeService,$http) {
    /*****************************************/
    /* Initialize variables */
    /*****************************************/   
    $scope.totalTime;
    $scope.recipeName;
    $scope.rating;
    $scope.numberOfServings;
    $scope.sourceDisplayName;
    $scope.sourceSiteUrl;
    $scope.sourceRecipeUrl;
    $scope.ingredients = [];
    $scope.images =[];
    $scope.hostedLargeUrl;
    $scope.hostedSmallUrl;
    $scope.course;
    $scope.recipe_id = $routeParams.recipeId;
    $scope.errorMessage;
    $scope.embedRecipeWebSource = false;
    $scope.buttonText = 'Go To';
    /*****************************************/
    /* Public methods */
    /*****************************************/
    $scope.getRecipeDetail = function() {
        getRecipeDetail();
    };
 
    //$scope.data = {'recipeId': $scope.recipeId,'imageUrl': $scope.hostedLargeUrl,'name': $scope.recipeName, 'userId': 'bich@gmail.com'};

    $scope.addToFav = function() {
        var data = {recipeId: $scope.recipe_id,imageUrl: $scope.hostedLargeUrl,name: $scope.recipeName, userId: 'bich@gmail.com'};
        alert($scope.recipe_id+$scope.hostedLargeUrl+$scope.recipeName+data.userId);
        $http.post('/api/post', data, {
            headers: { 'Content-Type': 'application/json; charset=UTF-8'}
        }).then(function() {
        alert("inside the add function"); 
        
      },function(status){
          alert("error when adding favorite");
      });
    }

    // $scope.addToFav = function() {
    //     var data = {recipeId: $scope.recipe_id,imageUrl: $scope.hostedLargeUrl,name: $scope.recipeName, userId: 'bich@gmail.com'};
    //     alert($scope.recipe_id+$scope.hostedLargeUrl+$scope.recipeName+data.userId);
    //     $http.post(
    //         'https://api.mlab.com/api/1/databases/lazyfoodie/collections/favorites/' + 
    //          $scope.id + '?apiKey=lazyfoodie2016', data
    //     ).then(function() {
    //     alert("inside the add function"); 
        
    //   },function(status){
    //       alert("error when adding favorite");
    //   });
    // }


    /*****************************************/
    /* Helper private methods */
    /*****************************************/
    function getRecipeDetail() {
        RecipeService.GetRecipeById($routeParams.recipeId)
        .then(function(recipeDetail) {
            $scope.totalTime = recipeDetail.totalTime;
            $scope.recipeName = recipeDetail.name;
            $scope.rating = recipeDetail.rating;
            $scope.numberOfServings = recipeDetail.numberOfServings;
            $scope.sourceDisplayName = recipeDetail.source.sourceDisplayName;
            $scope.course = recipeDetail.attributes.course.toString();
            $scope.sourceSiteUrl= recipeDetail.source.sourceSiteUrl;
            $scope.sourceRecipeUrl = recipeDetail.source.sourceRecipeUrl;
            $scope.ingredients = recipeDetail.ingredientLines.toString();
            $scope.images = recipeDetail.images;
            $scope.hostedLargeUrl = $scope.images[0].hostedLargeUrl;
            $scope.hostedSmallUrl = $scope.images[0].hostedSmallUrl;
            $routeParams.recipeId = '';
        }, function(error) {
            console.log('Error getting top recipes from yummly: ' + error);
            $scope.errorMessage = 'Error getting top recipes from yummly: ' + error;
        })      
    }


}); 