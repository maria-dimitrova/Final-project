app.controller('uploadCtrl', function ($scope, $http){
	$scope.images = [];
	$scope.form = [];
    $scope.submit = function() {
    $scope.images = $scope.currentFile;
    console.log($scope.images.length);
    console.log($scope.description);
    console.log($scope.title);
    var formData = new FormData();
    for (var i = 0; i < $scope.images.length; i++) {
    	formData.append("image"+ i, $scope.images[i]);
    }
      formData.append("title", $scope.title);
      formData.append("description", $scope.description); 
      formData.append("id", $scope.id); 
      console.log(formData);
	var request = $http({
		  method  : 'POST',
		  url     : 'server/uploadPost.php',
		  processData: false,
		  data : formData,
		  headers: {
		         'Content-Type': undefined
		  }
	   })
	   
	   request.then(function(data){
		   console.log(angular.fromJson(data));
	   }, function (error){
		   alert("error");
	   });
    }
    $scope.uploadedFile = function(element) {
	    $scope.currentFile = element.files;
	   
	   return $scope.currentFile;
	   /* var reader = new FileReader();

	    reader.onload = function(event) {
	      $scope.image_source = event.target.result
	      $scope.$apply(function($scope) {
	        $scope.files = element.files;
	      });
	    }
                reader.readAsDataURL(element.files[0]);*/
	  }
})