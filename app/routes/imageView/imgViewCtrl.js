app.controller('imageCtrl', function ( $location, $http, $scope, $routeParams, PostsSrv){
	/*(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8&appId=1120426538045057";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));*/
	
	var id = $routeParams.image;
	$scope.post = PostsSrv.getAPost(id);
	
	if($scope.post == undefined) {
		$location.path('/gallery');
	} else {
	  $scope.rates = [];
	  $scope.max = 10;
		  
	  if(!$scope.post.Rating){
		  $scope.rating = 0;		  
	  } else {
		  $scope.rating = Number($scope.post.Rating).toFixed(2);		  	  
	  }
	  
	  if($scope.post.Likes == null){
		  $scope.likes = 0;		  
	  } else {
		  $scope.likes = $scope.post.Likes;		  	  
	  }

	  $scope.hoveringOver = function(value) {
		  $scope.overStar = value;
		  $scope.percent = 100 * (value / $scope.max);
		  //console.log( value)
	  };
		  
	  var path = $scope.post.ImagePath;
	  if (path.match(/jpg/g ) || path.match(/png/g ) || path.match(/bpm/g )){
			$scope.isExt = true;
		} else if (path.match(/mp4/g )) {
			$scope.post.VideoPath =path;
			$scope.isVid = true;
			$scope.isExt = false;
		} else {
			$scope.post.ImagePath = 'uploads/small/noimage.jpg';
			$scope.isExt = true;
			$scope.isVid = false;
		}
	}
	//console.log($scope.post);
	$scope.checked = false; 
	
	$scope.calculateRating = function(isReadonly) {
		var rateResult = (Number($scope.overStar) + Number($scope.rating)) / 2;
		if(!$scope.isReadonly) {
			$http({
				method  : 'POST',
				url     : 'server/updateRating.php',
				data : {'rating': rateResult , 'id': id},
				headers: {'Content-Type': 'application/json'}
			}).then(function(data){
				var result = angular.fromJson(data);
				$scope.rating = Number(rateResult).toFixed(2);
			}, function (error){
				console.log("error--");
			});
		}
		$scope.isReadonly = true;
	};
	
	$scope.updateLikes = function (check) {
		if (!check) {
			$scope.likes++;
			var likes = $scope.likes;
			$http({
	 			method  : 'POST',
	 			url     : 'server/updateLikes.php',
	 			data : {'likes': likes , 'id': id},
	 			headers: {'Content-Type': 'application/json'}
		 	}).then(function(data) {
		 		var result = angular.fromJson(data);
		 		//console.log(data);
		 		if(!data) {
		 			 console.log(problem);
		 		}}, function (error){
		 			console.log("error--");
		 		});
		}
		$scope.isReadonlyLike = true;
	};
})

