angular.module('NerdService', []).factory('NerdService', function($http, $q) {

    var baseUrl = "api/nerds";
    var nerService = {};
    nerService.GetTestData = getTestData;

    return nerService;

    function getTestData () {
        var url = baseUrl;
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


