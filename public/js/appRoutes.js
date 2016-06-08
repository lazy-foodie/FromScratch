// public/js/appRoutes.js
var theApp = angular.module('appRoutes', [])

theApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html', // controller defined dynamicly inside the view
            access: {restricted: false}
        })

        // nerds page that will use the NerdController
        .when('/nerds', {
            templateUrl: 'views/nerd.html',
            access: {restricted: false}
        })

        // favRecipes page whose controller will be decided from the view
        .when('/favRecipes', {
            templateUrl: 'views/favoriteRecipesView.html',
            access: {restricted: false}
        })

        // recipe detail of a recipe 
        .when('/recipes/:recipeId', {
            templateUrl: 'views/oneRecipeView.html',
            access: {restricted: false}            
        })

        // login page whose controller will be decided from the view
        .when('/login', {
            templateUrl: 'views/loginView.html',
            access: {restricted: false}            
        })

        // about page
        .when('/about', {
            templateUrl: 'views/aboutView.html',
            access: {restricted: false}
        })

        // contact page
        .when('/contact', {
            templateUrl: 'views/contactView.html',
            access: {restricted: false}
        })

        // register page
        .when('/register', {
            templateUrl: 'views/registerView.html',
            access: {restricted: false}
        })

        // user profile page
        .when('/profile', {
            templateUrl: 'views/profileView.html',
            access: {restricted: false}
        })

        // search for recipes page
        .when('/searchResult/:searchQuery', {
            templateUrl: 'views/searchResultView.html',
            access: {restricted: false}
        })
         
        .otherwise({
        redirectTo: '/'
        });

    $locationProvider.html5Mode(true);

}]);

theApp.run(function ($rootScope, $location, $route, UserService) {
  $rootScope.$on('$routeChangeStart',
    function (event, next, current) {
        UserService.UserStatus()
        .then(function(){
            if (next.access.restricted && !UserService.IsLoggedIn()){
                event.preventDefault();
                $location.path('/login');
                $route.reload();
            }
        });
  });
});
    