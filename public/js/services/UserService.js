angular.module('UserService', []).factory('UserService', ['$http', '$q', '$timeout',function($http, $q, $timeout) {
    // base Rest API route
    var baseUrl = "api/users/";

    // Initialize user obj
    var user = {};

    /*****************************************/
    /* Initialize public services */
    /*****************************************/      
    var userService = {};
    userService.GetTestData = getTestData;
    userService.GetUserById = getUserById;
    userService.Register = register;
    userService.Login = login;
    userService.Logout = logout;
    userService.IsLoggedIn = isLoggedIn;
    userService.CurrentUser = getCurrentUser;
    userService.UserStatus = getUserStatus;

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
            url = baseUrl + id;
            return $http.get(url).then(handleSuccess, handleError);
    }

    function register (user) {
        url = baseUrl + '/register';
        // return $http.post(url, user).then(handleSuccess, handleError);
        // create a new instance of deferred
        var deferred = $q.defer();

        // send a post request to the server
        $http.post('/user/register', user)
        // handle success
        .then(function (data, status) {
            if(status === 200 && data.status){
                deferred.resolve();
            } else {
                deferred.reject();
            }
        },
        // handle error
        function (data) {
            deferred.reject();
        });

        // return promise object
        return deferred.promise;
    }

    function login(reqUser) {
        url =  baseUrl+ '/login';
        // return $http.post(url, reqUser).then(handleSuccess, handleError);
        // create a new instance of deferred
        var deferred = $q.defer();

        // send a post request to the server
        $http.post('/user/login', reqUser)
        // handle success
        .then(function (data, status) {
            if(status === 200 && data.status){
                user = reqUser;
                deferred.resolve();
            } else {
                user = {};
                deferred.reject();
            }
        },
        // handle error
        function (data) {
            user = {};
            deferred.reject();
        });

        // return promise object
        return deferred.promise;
    }

    function logout(user) {
        url = baseUrl + '/logout';
        // return $http.get(url).then(handleSuccess, handleError);
        // create a new instance of deferred
        var deferred = $q.defer();
        // send a get request to the server
        $http.get(url)
        // handle success
        .then(function (data) {
            user = {};
            deferred.resolve();
        },
        // handle error
        function (data) {
            user = {};
            deferred.reject();
        });

        // return promise object
        return deferred.promise;
    }

    //returns a boolean to check if user is logged in
    function isLoggedIn(){
        return user !== null? true: false;
    };

    //returns name of user logged in
    function getCurrentUser(){
        return user;
    };

    function getUserStatus() {
        return $http.get('/user/status')
          // handle success
        .then(function (data) {
            if(!data.status){
              user = {};
            } 
        },
          // handle error
        function (data) {
            user = {};
        });
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

    function handleSuccess( response, status) {
        if (typeof response.data === 'object') {
            return response.data;
        } else {
            // invalid response
            return $q.reject(response.data);
        }
    }
}]);