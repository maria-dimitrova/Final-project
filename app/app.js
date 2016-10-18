/**
 * 
 */

var app = angular.module('mainApp', ['ngAnimate', 'ui.bootstrap', 'ngRoute', 'infinite-scroll', 'ngSanitize'])
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
				Title: 'post.Title',ss
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
		.when('/profile/:image*', {
			templateUrl: 'app/routes/profileImages/image.html',
			controller: 'profileImageCtrl'
		})
		.when('/login', {
			templateUrl: 'app/routes/home/home.html',
			controller: 'homeCtrl'
		})
		.otherwise('/home');
	})
	.controller( 'mainCtrl', function ($scope, $window, $location) {
    $scope.toTheTop = function() {
    	$window.scrollTo(0, 0);
    }
    
    $scope.$on('$routeChangeStart', function() { 
 	   if($location.$$path == '/gallery' || $location.$$path == '/upload' || $location.$$path=='/prfile') {
 		   $scope.boolfooter = false;
 	   } else {
 		   $scope.boolfooter = true;
 	   }
 	   //console.log($location.$$path);
 	   (function(d, s, id) {
 		   FB = null;
           var js, fjs = d.getElementsByTagName(s)[0];
           //if (d.getElementById(id)) return;
           js = d.createElement(s); js.id = id;
           js.src = "//connect.facebook.net/en_US/sdk.js";
           fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    });
})

