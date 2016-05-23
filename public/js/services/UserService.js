angular.module('UserService', []).factory('UserService', function($http, $q) {
    // base Rest API route
    var baseUrl = "api/users/";
    /*****************************************/
    /* Initialize public services */
    /*****************************************/      
    var userService = {};
    userService.GetTestData = getTestData;
    userService.GetUserById = getUserById;
    userService.Register = register;
    userService.Login = login;
    userService.IsLoggedIn = isLoggedIn;
    userService.CurrentUser = currentUser;

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

    function register (user) {
        url = '/register';
        // return $http.post(url, user).then(handleSuccess, handleError);
    }

    function login(user) {
        url = '/login';
        // return $http.post(url, user).then(handleSuccess, handleError);
    }


    //returns a boolean to check if user is logged in
    function isLoggedIn(){
        return true;
    };

    //returns name of user logged in
    function currentUser(){
        return 'bich';
    };

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