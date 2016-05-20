angular.module('UserService', []).factory('UserService', function($http, $q) {
    // base Rest API route
    var baseUrl = "api/users/";
    /*****************************************/
    /* Initialize public services */
    /*****************************************/      
    var userService = {};
    userService.GetTestData = getTestData;
    userService.GetUserById = getUserById;

    return userService;


    /*****************************************/
    /* Helper private methods */
    /*****************************************/

    // Get all users
    function getTestData () {
        var url = baseUrl;
        return $http.get(url).then(handleSuccess, handleError);
    }

        function getUserById (id) {
            url = 'api/users/' + id;
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