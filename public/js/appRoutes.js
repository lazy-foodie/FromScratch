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
            controller: 'NerdController'
        })

        // favRecipes page whose controller will be decided from the view
        .when('/favRecipes', {
            templateUrl: 'views/favoriteRecipesView.html'
        })

        // login page whose controller will be decided from the view
        .when('/login', {
            templateUrl: 'views/loginView.html'
        })

         .when('/profile', {
            templateUrl: 'views/profileView.html'
        })
        .otherwise({
        redirectTo: '/'
        });

    $locationProvider.html5Mode(true);

}]);