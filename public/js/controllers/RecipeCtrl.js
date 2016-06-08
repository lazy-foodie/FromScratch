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

    $scope.addToFav = function() {
        var data = {recipeId: $scope.recipe_id,imageUrl: $scope.hostedLargeUrl,name: $scope.recipeName, userId: 'bich@gmail.com'};
        $http.post('/api/post', data, {
            headers: { 'Content-Type': 'application/json; charset=UTF-8'}
        }).then(function() {
        alert("Added to your favorite list!");         
      },function(status){
          alert("Error when adding favorite");
      });
    }

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