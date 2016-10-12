/**
 * 
 */

app.controller('profileCtrl', function ($scope, $http){
	
	$scope.check = function () {
		 		$http({
		 			method  : 'GET',
		 			url     : 'server/getUserPosts.php'
		 		}).then(function(data){
		 			console.log(angular.fromJson(data));
		 		}, function (error){
		 			alert("error--");
		 		})
		 	}
	
});