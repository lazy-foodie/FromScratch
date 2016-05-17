angular.module('NerdService', []).factory('NerdService', function($http) {
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

    // var nerService = {};
    // nerService.GetAllRecipes = getAllRecipes;
    // nerService.GetTestData = getTestData;

    // return nerService;

    this.GetAllRecipes = function () {
        return recipes;
    };
    this.GetTestData = function () {
        var url = "http://api.yummly.com/v1/api/recipes?_app_id=d6f2e548&_app_key=0ef41e85e08ae10a1015801376315497&&requirePictures=true&maxResult=12";
        return $http.get(url);
    };

    // return {
    //     getAllRecipes : function(){
    //         return recipes;
    //     },
    //     getTestData: function() {
    //         var url = "http://api.yummly.com/v1/api/recipes?_app_id=d6f2e548&_app_key=0ef41e85e08ae10a1015801376315497&&requirePictures=true&maxResult=12"
    //         return $http.get(url);
    //     }
    // };
});


    // return {
    //     getAllRecipes : function(){
    //         var url = "http://api.yummly.com/v1/api/recipes?_app_id=d6f2e548&_app_key=0ef41e85e08ae10a1015801376315497&&requirePictures=true&maxResult=12"
    //         return $http.get(url);
    //     }
    //     getTestData: function() {
    //         var url = "https://api.mongolab.com/api/1/databases/angularjs-intro/collections/users?apiKey=terrPcifZzn01_ImGsFOIZ96SwvSXgN9";
    //         return $http.get(url);
    //     }
    // };
