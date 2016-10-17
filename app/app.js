/**
 * 
 */

var app = angular.module('mainApp', ['ngAnimate', 'ui.bootstrap', 'ngRoute', 'ngSanitize'])
	.config(function ($routeProvider) {
		$routeProvider
		.when('/home', {
			templateUrl: 'app/routes/home/home.html',
			controller: 'homeCtrl',
			css: 'assets/css/index.css'
		})
		.when('/gallery', {
			templateUrl: 'app/routes/gallery/gallery.html',
			controller: 'galleryCtrl',
			css: 'assets/css/index.css'
		})
		.when('/profile', {
			templateUrl: 'app/routes/profile/profile.html',
			controller: 'profileCtrl',
			css: 'assets/css/index.css'
		})
		.when('/login', {
			templateUrl: 'app/routes/login/login.html',
			controller: 'loginCtrl',
		})
		.otherwise('/home');
	})
	
	.controller( 'mainCtrl', function ($scope) {
    
	})