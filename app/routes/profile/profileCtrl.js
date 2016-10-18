/**
 * 
 */

app.controller('profileCtrl', function ($scope, $http, $location, $window, userSrv){
	
	$scope.name = $window.localStorage.name || 'No profile';
	$scope.mail = $window.localStorage.mail || 'No e-mail';
	$scope.id = $window.localStorage.id || '';
	$scope.pictureUrl = $window.localStorage.picture || 'http://live.warthunder.com/style/img/no_avatar.jpg';
	
	if (!$scope.id) {
		$location.path('/home');
	}
	
	var id = $scope.id;
	
	$http({
		method: 'POST',
		url: 'server/getUserPosts.php',
		data: {'id': id}
	}).then(function(data){
			var result = angular.fromJson(data);
			//console.log(result);
			$scope.posts = result.data;
 			if ($scope.posts == 'Problem 1') {
 				console.log('1');
 				$scope.posts = 0;
 			}
 			if ($scope.posts == 'Problem 2') {
 				console.log('2');
 				$scope.posts = 0;
 			}
 			if(userSrv.getPosts().length<= $scope.posts.length){
 				var i = userSrv.getPosts().length;
 			} else {
 				var i =0;
 			}
 			for( ; i<$scope.posts.length; i++ ){
 				userSrv.addPost($scope.posts[i]);
 				$scope.posts[i].Rating = Number($scope.posts[i].Rating).toFixed(2);
 				//console.log($scope.posts[i].ThImagePath);
 			}
 			
 			$scope.data = userSrv.getPosts().slice(0, 12);
 		}, function (error){
 			//alert("error--");
 		})
			
	/*console.log(userSrv.getInfo()[0].id);
	if(userSrv.getInfo()[0].id) {
	} else {
		$location.path = '/home';
	}*/
/*	$http({
	     method  : 'POST',
	     url     : 'server/updateRating.php',
	     data : {'rating': rateResult , 'id': id},
	     headers: {'Content-Type': 'application/json'}
	    }).then(function(data){
	     var result = angular.fromJson(data);
	     console.log(result);
	    }, function (error){
	     alert("error--");
	    })*/
	
/*	$scope.check = function () {
		 		$http({
		 			method  : 'GET',
		 			url     : 'server/getUserPosts.php'
		 		}).then(function(data){
		 			console.log(angular.fromJson(data));
		 		}, function (error){
		 			alert("error--");
		 		})
		 	}*/
	
});