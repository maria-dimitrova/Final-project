app.controller('galleryCtrl', function ($scope, $http){
	
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
 			console.log($scope.posts);
 		}, function (error){
 			alert("error--");
 		})
 	});

}) 