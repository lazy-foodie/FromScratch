// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html' // controller defined dynamicly inside the view
        })

        // nerds page that will use the NerdController
        .when('/nerds', {
            templateUrl: 'views/nerd.html',
        })

        // favRecipes page whose controller will be decided from the view
        .when('/favRecipes', {
            templateUrl: 'views/favoriteRecipesView.html'
        })

        // recipe detail of a recipe 
        .when('/recipes/:recipeId', {
            templateUrl: 'views/oneRecipeView.html'
        })

        // login page whose controller will be decided from the view
        .when('/login', {
            templateUrl: 'views/loginView.html'
        })

        // about page
        .when('/about', {
            templateUrl: 'views/aboutView.html'
        })

        // contact page
        .when('/contact', {
            templateUrl: 'views/contactView.html'
        })

        // register page
        .when('/register', {
            templateUrl: 'views/registerView.html'
        })

        // user profile page
        .when('/profile', {
            templateUrl: 'views/profileView.html'
        })

        // search for recipes page
        .when('/searchResult/:searchQuery', {
            templateUrl: 'views/searchResultView.html'
        })
         
        .otherwise({
        redirectTo: '/'
        });

    $locationProvider.html5Mode(true);

}]);
    