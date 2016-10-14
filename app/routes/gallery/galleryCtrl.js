app.controller('galleryCtrl',function ( $scope, $http, PostsSrv){
	
	$scope.rate;
	 	  $scope.max = 10;
	 	  $scope.isReadonly = false;
	 	  $scope.rating = 5;
	 
	 	  $scope.hoveringOver = function(value) {
	 	    $scope.overStar = value;
	 	    $scope.percent = 100 * (value / $scope.max);
	 	  };
	 
 	angular.element(document).ready(function () {
 		$http({
 			method  : 'GET',
 			url     : 'server/getUserPosts.php'
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
 			for(var i = 0; i<$scope.posts.length; i++ ){
 				PostsSrv.addPost($scope.posts[i]);
 			}
 			console.log(PostsSrv.getPosts());
 		}, function (error){
 			alert("error--");
 		})
 	});

}) 