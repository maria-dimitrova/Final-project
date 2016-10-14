app.controller('imageCtrl', function ($scope, $routeParams, PostsSrv){
	var id = $routeParams.image;
	console.log(id);
	$scope.post = PostsSrv.getAPost(id);
	console.log($scope.post);
})

