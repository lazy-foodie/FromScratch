// public/js/app.js
angular.module(
	'lazyFoodieApp', 
	['ngRoute', 
	'appRoutes', 
	'MainCtrl', 
	'NerdCtrl', 
	'NerdService', 
	'RecipeService',
	'UserCtrl', 
	'UserService', 
	'RecipeCtrl', 
	'FavRecipeCtrl',
	'FavRecipeService'
]);
