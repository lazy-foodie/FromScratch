angular.module('RecipeCtrl', []).controller('RecipeController', function($scope, $routeParams, $rootScope, RecipeService) {
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
    $scope.recipe_id = $routeParams.recipeId;
    $scope.errorMessage;
    $scope.embedRecipeWebSource = false;
    $scope.buttonText = 'Collapse';
    /*****************************************/
    /* Public methods */
    /*****************************************/
    $scope.getRecipeDetail = function() {
        getRecipeDetail();
    };
    $scope.togleEmbedRecipeWebSource = function (){
        $scope.embedRecipeWebSource = !$scope.embedRecipeWebSource;
        $scope.buttonText = ($scope.buttonText === 'Collapse') ? 'Show' : 'Collapse';
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