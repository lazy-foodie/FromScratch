'use strict';

angular.module('appConfig', [])
.constant('appConfig', {
	 //Api urls
    'yummlyApiUrl': 'https://api.yummly.com/v1/api/recipe',
    'yummlyId': 'f0e69f2b',
    'yummlyKey': '805686b7d91a6de3510c1c7be77c7b4e',
    'yummlyAuthentication': '_app_id=f0e69f2b&_app_key=805686b7d91a6de3510c1c7be77c7b4e',
    'favoriteRecipeError': 'Error occured while fetching favorite recipes from database',
    'userInfoError': 'Error occured while fetching user info from database',
    'yummlyError': 'Error occured while fetching recipes from Yummly'    
});
