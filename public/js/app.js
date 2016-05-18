// public/js/app.js
angular.module(
	'lazyFoodieApp', 
	['ngRoute', 
	'appRoutes', 
	'NerdCtrl', 
	'MainCtrl', 
	'NerdService', 
	'RecipeService',
	'UserCtrl', 'RecipeCtrl', 'FavoriteRecipesCtrl','SearchResultCtrl'
]);
