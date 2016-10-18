app.controller('profileImageCtrl', function ( $location, $http, $scope, $routeParams, userSrv){
	 
	var id = $routeParams.image;
	$scope.post = userSrv.getAPost(id);
	
	if($scope.post == undefined) {
		$location.path('/profile');
	} else {
		$scope.rates = [];
		$scope.max = 10;
	    if(!$scope.post.Rating){
		    $scope.rating = 0;		  
	    } else {
	        $scope.rating = $scope.post.Rating;		  	  
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
		if (path.match(/jpg/g ) || path.match(/png/g ) || path.match(/bpm/g )) {
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
	
	$scope.checked = false;
	
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
	
	/*$scope.updateLikes = function (check) {
		if (!check){
		var likes = ($scope.post.Likes++) + '';
		console.log($scope.post.Likes);
		console.log(likes);
		 $http({
	 			method  : 'POST',
	 			url     : 'server/updateLikes.php',
	 			data : {'likes': likes , 'id': id},
	 			headers: {'Content-Type': 'application/json'}
	 		}).then(function(data){
	 			var result = angular.fromJson(data);
	 			console.log(result);
	 			 if(!data) {
	 				 console.log(problem);
	 			 }
	 		}, function (error){
	 			console.log("error--");
	 		})
		}
	 		$scope.isReadonlyLike = true;
	}
	  $scope.calculateRating = function(isReadonly) {
		  var sum = 0;
		  $scope.rates.push($scope.overStar);
		  for (var i in $scope.rates) {
			  sum = sum + $scope.rates[i];
		  }
		  if(!$scope.isReadonly) {
			  $scope.rating = sum / $scope.rates.length;
			  var rateResult = $scope.rating + '';
			  console.log(rateResult);
			  $http({
		 			method  : 'POST',
		 			url     : 'server/updateRating.php',
		 			data : {'rating': rateResult , 'id': id},
		 			headers: {'Content-Type': 'application/json'}
		 		}).then(function(data){
		 			var result = angular.fromJson(data);
		 			 
		 		}, function (error){
		 			console.log("error--");
		 		})
		  }
		  $scope.isReadonly = true;
	  };*/
	  
	  $scope.changeTitle = function () {
		  $scope.input = true;
			/*id???*/
			var title = $scope.input + '';
			console.log($scope.input);
			
			 $http({
		 			method  : 'POST',
		 			url     : 'server/changeTitle.php',
		 			data : {'title': title , 'id': id},
		 			headers: {'Content-Type': 'application/json'}
		 		}).then(function(data){
		 			var result = angular.fromJson(data);
		 			console.log(result);
		 			 if(!data) {
		 				 console.log(problem);
		 			 }
		 		}, function (error){
		 			console.log("error--");
		 		})
	}
		 
	$scope.changeDesc = function () {
		/*id???*/
		var desc = $scope.input + '';
		console.log($scope.input);
		
		 $http({
	 			method  : 'POST',
	 			url     : 'server/changeDesc.php',
	 			data : {'desc': desc , 'id': id},
	 			headers: {'Content-Type': 'application/json'}
	 		}).then(function(data){
	 			var result = angular.fromJson(data);
	 			console.log(result);
	 			 if(!data) {
	 				 console.log(problem);
	 			 }
	 		}, function (error){
	 			console.log("error--");
	 		})
	}

	$scope.deletePost = function () {
		/*id???*/
		$http({
				method  : 'POST',
				url     : 'server/changeDesc.php',
				data : {'id': id},
				headers: {'Content-Type': 'application/json'}
			}).then(function(data){
				var result = angular.fromJson(data);
				console.log(result);
				 if(!data) {
					 console.log(problem);
				 }
			}, function (error){
				console.log("error--");
			})
	}
})

