app.controller('galleryCtrl',function ( $document, $window, $scope, $http, PostsSrv){
	
	$scope.posts = [];  
		  
	  $scope.mouseover = function(){
		    $scope.myStyle2 = {
		      animation: 'swim 300ms linear;'
		    };
		 }
	/*  $scope.ratingStates = [
	    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
	    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
	    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
	    {stateOn: 'glyphicon-heart'},
	    {stateOff: 'glyphicon-off'}
	  ];*/
 	angular.element(document).ready(function () {
 		var urlValue = 'server/getPosts.php';
 		$scope.changeRating(urlValue);
 	});
 	
 	
 	$scope.highestRating = function () {
 		var urlValue = 'server/getHighestRating.php';
 		$scope.changeRating(urlValue);
 	}
 	
 	$scope.lowestRating = function () {
 		var urlValue = 'server/getLowestRating.php';
 		$scope.changeRating(urlValue);
 		
 	}
 	$scope.clearRating = function () {
 		var urlValue = 'server/getPosts.php';
 		$scope.changeRating(urlValue);
 	}
 	$scope.changeRating = function (urlValue) {
 		PostsSrv.emptyArray();
 		$http({
 			method  : 'GET',
 			url     : urlValue
 		}).then(function(data){
 			var result = angular.fromJson(data);
 			
 			$scope.posts = result.data;
 			if ($scope.posts == 'Problem 1') {
 				console.log('1');
 				$scope.posts = 0;
 			}
 			if ($scope.posts == 'Problem 2') {
 				console.log('2');
 				$scope.posts = 0;
 			}
 			if(PostsSrv.getPosts().length <= $scope.posts.length || PostsSrv.getPosts() == undefined || $scope.posts == undefined){
 				var i = PostsSrv.getPosts().length;
 			} else {
 				var i =0;
 			}
 			for( ; i<$scope.posts.length; i++ ){
 				PostsSrv.addPost($scope.posts[i]);
 				$scope.posts[i].Rating = Number($scope.posts[i].Rating).toFixed(2);
 			}
 			
 			$scope.data = PostsSrv.getPosts().slice(0, 12);
 		}, function (error){
 			alert("error--");
 		})
 		
 		
 		$scope.data = PostsSrv.getPosts().slice(0, 0);
 		//console.log($scope.data);
 	 	$scope.getMoreData = function () {
 	 	    $scope.data = PostsSrv.getPosts().slice(0, $scope.data.length + 4);
 	 	}
 	 	
 	}

}) 