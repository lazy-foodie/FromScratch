// // public/js/services/NerdService.js
// angular.module('NerdService', []).factory('NerdService', ['$http', function($http) {

//     return {
//         // call to get all nerds
//         get : function() {
//             return $http.get('/api/nerds');
//         },


//                 // these will work when more API routes are defined on the Node side of things
//         // call to POST and create a new nerd
//         create : function(nerdData) {
//             return $http.post('/api/nerds', nerdData);
//         },

//         // call to DELETE a nerd
//         delete : function(id) {
//             return $http.delete('/api/nerds/' + id);
//         }
        
//     }       

// }]);


angular.module('RecipeService', []).factory('RecipeService', function() {
            var recipes = [{
      "url": "https://lh3.googleusercontent.com/nJplGzIVN_M5vplJPPlaujuPtirBefbCkQWbknOAtrpkxWrRHzvOWA1rxENELor9Chld3wYEfkaQlPFJspfOKA=s200-c",
      "id": "Flat-Belly-Detox-water-1606683",
      "name": "Flat Belly Detox water"
     
    },
    {
      "url": "https://lh3.googleusercontent.com/F-_KH5pDERr6SceluRVM0Kwhr2_-S2nV9qQg3RpLuQm3eEjvKDRfJSXuIyt0_gdrHD8K6_t_hVRWTnt6sRi1PQ=s200-c",
      "id": "Guacamole-1601887",
      "name": "Guacamole"   
    },
    {
      "url": "https://lh3.googleusercontent.com/F-_KH5pDERr6SceluRVM0Kwhr2_-S2nV9qQg3RpLuQm3eEjvKDRfJSXuIyt0_gdrHD8K6_t_hVRWTnt6sRi1PQ=s200-c",
      "id": "Guacamole-1601887",
      "name": "Guacamole"   
    },
    {
        "id": "Guacamole-1601887",
      "url": "https://lh3.googleusercontent.com/QuZPWUWgrbHo7OZ3u_lEd_XVjH1mhYgKlykkqgneNgJ943RMWZhGdwzycWc24hWKqrlj1HC4j9Ry4BJwtyydqA=s200-c",
      "recipeName": "Guacamole",
    },
        {
      "url": "https://lh3.googleusercontent.com/F-_KH5pDERr6SceluRVM0Kwhr2_-S2nV9qQg3RpLuQm3eEjvKDRfJSXuIyt0_gdrHD8K6_t_hVRWTnt6sRi1PQ=s200-c",
      "id": "Guacamole-1601887",
      "name": "Guacamole"   
    },
            {
      "url": "https://lh3.googleusercontent.com/F-_KH5pDERr6SceluRVM0Kwhr2_-S2nV9qQg3RpLuQm3eEjvKDRfJSXuIyt0_gdrHD8K6_t_hVRWTnt6sRi1PQ=s200-c",
      "id": "Guacamole-1601887",
      "name": "Guacamole"   
    },
    {
      "url": "https://lh3.googleusercontent.com/nJplGzIVN_M5vplJPPlaujuPtirBefbCkQWbknOAtrpkxWrRHzvOWA1rxENELor9Chld3wYEfkaQlPFJspfOKA=s200-c",
      "id": "Flat-Belly-Detox-water-1606683",
      "name": "Flat Belly Detox water"
     
    },
    

    {
      "url": "https://lh3.googleusercontent.com/F-_KH5pDERr6SceluRVM0Kwhr2_-S2nV9qQg3RpLuQm3eEjvKDRfJSXuIyt0_gdrHD8K6_t_hVRWTnt6sRi1PQ=s200-c",
      "id": "Guacamole-1601887",
      "name": "Guacamole"   
    },
            {
      "url": "https://lh3.googleusercontent.com/F-_KH5pDERr6SceluRVM0Kwhr2_-S2nV9qQg3RpLuQm3eEjvKDRfJSXuIyt0_gdrHD8K6_t_hVRWTnt6sRi1PQ=s200-c",
      "id": "Guacamole-1601887",
      "name": "Guacamole"   
    },
    {
      "url": "https://lh3.googleusercontent.com/nJplGzIVN_M5vplJPPlaujuPtirBefbCkQWbknOAtrpkxWrRHzvOWA1rxENELor9Chld3wYEfkaQlPFJspfOKA=s200-c",
      "id": "Flat-Belly-Detox-water-1606683",
      "name": "Flat Belly Detox water"
     
    },
    {
      "url": "https://lh3.googleusercontent.com/F-_KH5pDERr6SceluRVM0Kwhr2_-S2nV9qQg3RpLuQm3eEjvKDRfJSXuIyt0_gdrHD8K6_t_hVRWTnt6sRi1PQ=s200-c",
      "id": "Guacamole-1601887",
      "name": "Guacamole"   
    }
    
  ];
    return {
        getAllRecipes : function(){
            return recipes;
        }
    };
});


// angular.module('NerdService', []).factory('NerdService', function($http, $q) {
//     return({
//         getAllRecipes: getAllRecipes
//     });   

//     function getAllRecipes() {
//         var request = $http({
//             method: "get",
//             url: "api/toprankedrecipes",
//         });
//         return( request.then( handleSuccess, handleError ) );   
//     }   

//     function handleError( response ) {
//         // The API response from the server should be returned in a
//         // nomralized format. However, if the request was not handled by the
//         // server (or what not handles properly - ex. server error), then we
//         // may have to normalize it on our end, as best we can.
//         if (
//             ! angular.isObject( response.data ) ||
//             ! response.data.message
//             ) {
//             return( $q.reject( "An unknown error occurred." ) );
//         }
//         // Otherwise, use expected error message.
//         return( $q.reject( response.data.message ) );
//     }
//     // I transform the successful response, unwrapping the application data
//     // from the API response payload.
//     function handleSuccess( response ) {
//         return( response.data );
//     }

// });
