app.controller('uploadCtrl', function ($scope, $window, $http, $location) {
	$scope.boolFooter = false;
	$scope.images = [];
	$scope.form = [];
	var id = $window.localStorage.id + '';
	var userName = $window.localStorage.name;
	$scope.showState = false;
	$scope.id = id;
    $scope.submit = function() {
	    $scope.images = $scope.currentFile;
	    //console.log($scope.images.length);
	    //console.log($scope.description);
	    //console.log($scope.title);
	    //console.log($scope.id);
	    var formData = new FormData();
	    for (var i = 0; i < $scope.images.length; i++) {
	    	formData.append("image"+ i, $scope.images[i]);
	    }
	    formData.append("title", $scope.title);
	    formData.append("description", $scope.description); 
	    formData.append("id", id);
	    formData.append("userName", userName);
	    //console.log(formData);
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
			   //console.log(angular.fromJson(data));
			   $scope.title = '';
			   $scope.image = '';
			   $scope.description = '';
			   $scope.showState = true;
			   console.log($scope.showState);
			   //$location.path('/profile');
		   }, function (error){
			   //alert("error");
		   });
    }
    
    $scope.addNewPost = function() {
    	$location.path('/upload');
    }
    
    $scope.uploadedFile = function(element) {
    	$scope.currentFile = element.files;
	    //console.log($scope.currentFile);
	  /* for(var i = 0; i< element.files.length; i++) {
		   if (element.files[i].type.match('image.*')) {
			   
			   var reader = new FileReader();
			   reader.onload = function(event) {
				   var picFile = event.target
				   $scope.image_source =  picFile.result + "'" + "title='" + picFile.name
				   console.log( $scope.image_source);
				   $scope.$apply(function($scope) {
					   $scope.files = element.files;
				   });
				   
				   reader.readAsDataURL(file);
			   };
			   } else{
				   continue;
			   }
		   }*/
	    
	   return $scope.currentFile;
    }
})