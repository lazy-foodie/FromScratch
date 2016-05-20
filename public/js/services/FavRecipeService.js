angular.module('FavRecipeService', []).factory('FavRecipeService', function($http, $q) {

    
    var baseUrl = "/api/favorites";

    /*****************************************/
    /* Initialize public services */
    /*****************************************/  
    var favRecipeService = {};
    favRecipeService.GetTestData = getTestData;

    return favRecipeService;

    /*****************************************/
    /* Helper private methods */
    /*****************************************/

    // Get all favorite recipes
    function getTestData () {
        var url = baseUrl;
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
    function handleSuccess( response ) {
        if (typeof response.data === 'object') {
            return response.data;
        } else {
            // invalid response
            return $q.reject(response.data);
        }
    }
});


