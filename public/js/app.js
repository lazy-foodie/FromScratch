// public/js/app.js
angular.module(
	'lazyFoodieApp', 
	['ngRoute', 
	'appRoutes', 
	'appConfig',
	'NerdCtrl', 
	'MainCtrl', 
	'NerdService', 
	'RecipeService',
	'UserCtrl', 
	'UserService', 
	'RecipeCtrl', 
	'FavRecipeCtrl',
	'FavRecipeService',
	'SearchResultCtrl'
]);
