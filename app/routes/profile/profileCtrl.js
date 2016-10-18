/**
 * 
 */

app.controller('profileCtrl', function ($scope, $http, $location, $window, userSrv){
	$scope.boolFooter = false;
	$scope.name = $window.localStorage.name;
	$scope.mail = $window.localStorage.mail;
	$scope.id = $window.localStorage.id;
	$scope.pictureUrl = $window.localStorage.picture;
	
	var id = $scope.id;
	
	$http({
		method: 'POST',
		url: 'server/getUserPosts.php',
		data: {'id': id}
	}).then(function(data){
			var result = angular.fromJson(data);
			
			$scope.posts = result.data;
 			if ($scope.posts == 'Problem 1') {
 				console.log('1');
 				$scope.posts = undefined;
 			}
 			if ($scope.posts == 'Problem 2') {
 				console.log('2');
 				$scope.posts = undefined;
 			}
 			if(userSrv.getPosts().length<= $scope.posts.length || userSrv.getPosts() == undefined || $scope.posts == undefined){
 				var i = userSrv.getPosts().length;
 			} else {
 				var i =0;
 			}
 			for( ; i<$scope.posts.length; i++ ){
 				userSrv.addPost($scope.posts[i]);
 				//console.log($scope.posts[i].ThImagePath);
 			}
 			
 			$scope.profiledata = userSrv.getPosts().slice(0, 12);
 		}, function (error){
 			alert("error--");
 		})
 		
 		$scope.profiledata = userSrv.getPosts().slice(0, 0);
 		console.log($scope.data);
 	 	$scope.getMoreProfileData = function () {
 	 	    $scope.prodiledata = UserSrv.getPosts().slice(0, $scope.profiledata.length + 4);
 	 	}
			
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