/**
 * 
 */

var app = angular.module('mainApp', ['ngAnimate', 'ui.bootstrap', 'ngRoute'])
	.config(function ($routeProvider) {
		$routeProvider
		.when('/home', {
			templateUrl: 'app/routes/home/home.html',
			controller: 'homeCtrl',
			css: 'assets/css/index.css'
		})
		.when('/gallery', {
			templateUrl: 'app/routes/gallery/gallery.html',
			controller: 'galleryCtrl'
		})
		.when('/image', {
			templateUrl: 'app/routes/imageView/image.html',
			controller: 'imageCtrl'
		})
		.when('/upload', {
			templateUrl: 'app/routes/upload/upload.html',
 			controller: 'uploadCtrl'
  		})
		.when('/profile', {
			templateUrl: 'app/routes/profile/profile.html',
			controller: 'profileCtrl'
		})
		.when('/login', {
			templateUrl: 'app/routes/login/login.html',
			controller: 'loginCtrl'
		})
		.otherwise('/home');
	})
	.controller( 'mainCtrl', function ($scope) {
    
})