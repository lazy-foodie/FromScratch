
'use strict';

angular.module('RecipeService', []).factory('RecipeService', ['$http', '$q', 'appConfig', function($http, $q, appConfig) {
    /*****************************************/
    /* Configure yummly auth and url. This will be moved to config file later on */
    /*****************************************/      
    var authentication = "_app_id=" + appConfig.yummlyId + "&_app_key=" + appConfig.yummlyKey;
    var yummlySearchUrl = appConfig.yummlyApiUrl+"s?" + authentication;
    var yummlyGetUrl = appConfig.yummlyApiUrl + "/";
    
    /*****************************************/
    /* Initialize public services */
    /*****************************************/  
    var service = {};
    service.GetTopRecipes = getTopRecipes;
    service.GetRecipesByQuery = getRecipesByQuery;
    service.GetRecipeById = getRecipeById;

    return service; // return all services provided by RecipeService


    /*****************************************/
    /* Helper private methods */
    /*****************************************/

    /* Get some recipes from Yummly, used for home page*/
    function getTopRecipes() {
        var url = yummlySearchUrl+"&requirePictures=true&maxResult=24";
        return $http.get(url).then(handleSuccess, handleError);
    }


    /* Get recipes from Yummly based off query, used for search recipes*/
    function getRecipesByQuery(query) {
     var url = yummlySearchUrl + "&requirePictures=true&q=" + query + "&maxResult=50";
      return $http.get(url).then(handleSuccess, handleError);      
    }

    /* Calling yummly to get a recipe by Id, used for a recipe detail*/
    function getRecipeById(recipeId) {
        var url = yummlyGetUrl +  recipeId + "?" + authentication;
        return $http.get(url).then(handleSuccess, handleError);
    }

    /*****************************************/
    /* Helper private methods for error handling */
    /*****************************************/
    function handleError( response ) {
        if (
            ! angular.isObject( response.data ) ||
            ! response.data.message
            ) 
        {
            return( $q.reject( "An unknown error occurred." ) );
        }
            // Otherwise, use expected error message.
            return( $q.reject( response.data.message ) );
    }
    // I transform the successful response, unwrapping the application data
    // from the API response payload.
    function handleSuccess( response ) {
      // return( response );
        if (typeof response.data === 'object') {
            return response.data;
        } else {
            // invalid response
            return $q.reject(response.data);
        }
    }
}]);

