angular.module('UserService', []).factory('UserService', function($http, $q) {
    var baseUrl = "/api/users";
    var userService = {};
    userService.GetTestData = getTestData;
    userService.GetUserById = getUserById;

    return userService;

    function getTestData () {
        var url = baseUrl;
        return $http.get(url).then(handleSuccess, handleError);
    }

        function getUserById (id) {
            var url = '/api/users/' + id;
            return $http.get(url).then(handleSuccess, handleError);
    }

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
});