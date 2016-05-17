
'use strict';

angular.module('RecipeService', []).factory('RecipeService', ['$http', function($http) {
    var yummlyApiUrl= "https://api.yummly.com/v1/api/recipe";
    var yummlyId = "f0e69f2b";
    var yummlyKey = "805686b7d91a6de3510c1c7be77c7b4e";
    var authentication = "_app_id=" + yummlyId + "&_app_key=" + yummlyKey;
    var yummlySearchUrl = yummlyApiUrl + "?" + authentication + "&q=";
    var yummlyGetUrl = yummlyApiUrl + "/";

    // var recipes = [{
    //   "url": "https://lh3.googleusercontent.com/nJplGzIVN_M5vplJPPlaujuPtirBefbCkQWbknOAtrpkxWrRHzvOWA1rxENELor9Chld3wYEfkaQlPFJspfOKA=s200-c",
    //   "id": "Flat-Belly-Detox-water-1606683",
    //   "name": "Flat Belly Detox water"
     
    // },
    // {
    //   "url": "https://lh3.googleusercontent.com/F-_KH5pDERr6SceluRVM0Kwhr2_-S2nV9qQg3RpLuQm3eEjvKDRfJSXuIyt0_gdrHD8K6_t_hVRWTnt6sRi1PQ=s200-c",
    //   "id": "Guacamole-1601887",
    //   "name": "Guacamole"   
    // },
    // {
    //   "url": "https://lh3.googleusercontent.com/F-_KH5pDERr6SceluRVM0Kwhr2_-S2nV9qQg3RpLuQm3eEjvKDRfJSXuIyt0_gdrHD8K6_t_hVRWTnt6sRi1PQ=s200-c",
    //   "id": "Guacamole-1601887",
    //   "name": "Guacamole"   
    // },
    // {
    //     "id": "Guacamole-1601887",
    //   "url": "https://lh3.googleusercontent.com/QuZPWUWgrbHo7OZ3u_lEd_XVjH1mhYgKlykkqgneNgJ943RMWZhGdwzycWc24hWKqrlj1HC4j9Ry4BJwtyydqA=s200-c",
    //   "recipeName": "Guacamole",
    // },
    //     {
    //   "url": "https://lh3.googleusercontent.com/F-_KH5pDERr6SceluRVM0Kwhr2_-S2nV9qQg3RpLuQm3eEjvKDRfJSXuIyt0_gdrHD8K6_t_hVRWTnt6sRi1PQ=s200-c",
    //   "id": "Guacamole-1601887",
    //   "name": "Guacamole"   
    // },
    //         {
    //   "url": "https://lh3.googleusercontent.com/F-_KH5pDERr6SceluRVM0Kwhr2_-S2nV9qQg3RpLuQm3eEjvKDRfJSXuIyt0_gdrHD8K6_t_hVRWTnt6sRi1PQ=s200-c",
    //   "id": "Guacamole-1601887",
    //   "name": "Guacamole"   
    // },
    // {
    //   "url": "https://lh3.googleusercontent.com/nJplGzIVN_M5vplJPPlaujuPtirBefbCkQWbknOAtrpkxWrRHzvOWA1rxENELor9Chld3wYEfkaQlPFJspfOKA=s200-c",
    //   "id": "Flat-Belly-Detox-water-1606683",
    //   "name": "Flat Belly Detox water"
     
    // },
    
    // {
    //   "url": "https://lh3.googleusercontent.com/F-_KH5pDERr6SceluRVM0Kwhr2_-S2nV9qQg3RpLuQm3eEjvKDRfJSXuIyt0_gdrHD8K6_t_hVRWTnt6sRi1PQ=s200-c",
    //   "id": "Guacamole-1601887",
    //   "name": "Guacamole"   
    // },
    //         {
    //   "url": "https://lh3.googleusercontent.com/F-_KH5pDERr6SceluRVM0Kwhr2_-S2nV9qQg3RpLuQm3eEjvKDRfJSXuIyt0_gdrHD8K6_t_hVRWTnt6sRi1PQ=s200-c",
    //   "id": "Guacamole-1601887",
    //   "name": "Guacamole"   
    // },
    // {
    //   "url": "https://lh3.googleusercontent.com/nJplGzIVN_M5vplJPPlaujuPtirBefbCkQWbknOAtrpkxWrRHzvOWA1rxENELor9Chld3wYEfkaQlPFJspfOKA=s200-c",
    //   "id": "Flat-Belly-Detox-water-1606683",
    //   "name": "Flat Belly Detox water"
     
    // },
    // {
    //   "url": "https://lh3.googleusercontent.com/F-_KH5pDERr6SceluRVM0Kwhr2_-S2nV9qQg3RpLuQm3eEjvKDRfJSXuIyt0_gdrHD8K6_t_hVRWTnt6sRi1PQ=s200-c",
    //   "id": "Guacamole-1601887",
    //   "name": "Guacamole"   
    // }
    
    // ];
    var service = {};
    service.GetTopRecipes = getTopRecipes;
    service.GetRecipesByQuery = getRecipesByQuery;
    service.GetRecipeById = getRecipeById;
    service.GetTestData = getTestData;

    return service;

    function getTopRecipes() {
//      var url = yummlySearchUrl + "&requirePictures=true" + "onion+soup
// &maxResult=12";
//       var test =  $http.get(url);
        return recipes;
    }

    function getRecipesByQuery() {
          var url = yummlySearchUrl + "&requirePictures=true" + "onion+soup&maxResult=10&start=10";
          return $http.get(url).matches;      
    }

    function getRecipeById(recipeId) {
      var url = yummlyGetUrl +  recipeId + "?" + authentication;
      return $http.get(url);
    }

    function getTestData() {
      var url = "https://api.mongolab.com/api/1/databases/angularjs-intro/collections/users?apiKey=terrPcifZzn01_ImGsFOIZ96SwvSXgN9";
      return $http.get(url).then( handleSuccess, handleError);
    }

    function handleError( response ) {
      // The API response from the server should be returned in a
      // nomralized format. However, if the request was not handled by the
      // server (or what not handles properly - ex. server error), then we
      // may have to normalize it on our end, as best we can.
      if (
          ! angular.isObject( response.data ) ||
          ! response.data.message
          ) {
          return( $q.reject( "An unknown error occurred." ) );
      }
      // Otherwise, use expected error message.
      return( $q.reject( response.data.message ) );
    }
    // I transform the successful response, unwrapping the application data
    // from the API response payload.
    function handleSuccess( response ) {
      return( response );
    }

//            var url = yummlySearchUrl + "&requirePictures=true" + "onion+soup
// &maxResult=10&start=10";
//       return $http.get(url);
}]);


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
