/**
 * 
 */

var app = angular.module('mainApp', ['ngAnimate', 'ui.bootstrap', 'ngRoute', 'infinite-scroll'])
	.config(function ($routeProvider) {
		$routeProvider
		.when('/home', {
			templateUrl: 'app/routes/home/home.html',
			controller: 'homeCtrl'
		})
		.when('/gallery', {
			templateUrl: 'app/routes/gallery/gallery.html',
			controller: 'galleryCtrl'
		})
		.when('/gallery/:image*', {
			templateUrl: 'app/routes/imageView/image.html',
			controller: 'imageCtrl'
			/*params: {
				id: '',
				ImagePath: 'post.ImagePath',
				Title: 'post.Title',
				Description: 'post.Description',
				UserId: 'post.UserId'
		        }*/
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