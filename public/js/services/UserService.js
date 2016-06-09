angular.module('UserService', []).factory('UserService', ['$http', '$q', '$timeout', '$rootScope', function($http, $q, $timeout, $rootScope) {
    // base Rest API route
    var baseUrl = "api/users/";

    // Initialize user obj
    var user = null;
    /*****************************************/
    /* Initialize public services */
    /*****************************************/      
    var userService = {};
    userService.GetTestData = getTestData;
    userService.GetUserById = getUserById;
    userService.Register = register;
    userService.Update = update;
    userService.Login = login;
    userService.FacebookLogin = facebookLogin;
    userService.Logout = logout;
    userService.IsLoggedIn = isLoggedIn;
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
    // Register new user
    function register (user) {
        url = baseUrl + 'register';
        // return $http.post(url, user).then(handleSuccess, handleError);
        // create a new instance of deferred
        var deferred = $q.defer();

        // send a post request to the server
        $http.post(url, user)
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

    // Update
    function update(reqUser) {
        url = baseUrl + user.id;
        // create a new instance of deferred
        var deferred = $q.defer();

        // send a post request to the server
        $http.put(url, reqUser)
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

    // Login
    function login(reqUser) {
        url =  '/api/users/login';
        // return $http.post(url, reqUser).then(handleSuccess, handleError);
        // create a new instance of deferred
        var deferred = $q.defer();

        // send a post request to the server
        $http.post(url, reqUser)
        // handle success
        .then(function (data, status) {
            if(status === 200 && data.status){
                user = reqUser;
                $rootScope.currentUser = reqUser;

                deferred.resolve();
            } else {
                user = {};
                deferred.reject();
            }
        },
        // handle error
        function (data) {
            user = null;
            $rootScope.currentUser = null;
            deferred.reject();
        });

        // return promise object
        return deferred.promise;
    }

   // Login
    function facebookLogin() {
        url =  '/auth/facebook';
        alert('in facebookLogin in service')
        return $http.post(url)
            .then(function(data) {
                console.log('successfully logged in: ' + data);
                user = data;
                $rootScope.currentUser = data;

                // $alert({
                //     title: 'Cheers!',
                //     content: 'You have successfully logged in.',
                //     placement: 'top-right',
                //     type: 'success',
                //     duration: 3
                // });
            }, function(err) {
                console.log('error: ' + err);
                // $alert({
                //     title: 'Error!',
                //     content: 'Error occurred',
                //     placement: 'top-right',
                //     type: 'danger',
                //     duration: 3
                // });
            });
    };

    // Logout
    function logout(user) {
        url = '/logout';
  
        // return $http.get(url).then(handleSuccess, handleError);
        // create a new instance of deferred
        var deferred = $q.defer();
              $location.path('/');
        // send a get request to the server
        $http.post(url)
        // handle success
        .then(function (data) {
            user = null;
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

    //Returns a boolean to check if user is logged in
    function isLoggedIn(){
        return user === null? false:true;
    };

    // Return a user status
    function getUserStatus() {
        var url = baseUrl + 'status';
        return $http.get(url)
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