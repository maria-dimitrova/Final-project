/**
 * 
 */

app.controller('galleryCtrl', function ($scope){
	
	(function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0];
		  if (d.getElementById(id)) return;
		  js = d.createElement(s); js.id = id;
		  js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8&appId=1120426538045057";
		  fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	
	 $scope.rate = [];
	 $scope.raate = 0;
	  $scope.max = 10;
	  $scope.isReadonly = false;
	  $scope.rating = 0;

	  $scope.hoveringOver = function(value) {
	    $scope.overStar = value;
	    $scope.percent = 100 * (value / $scope.max);
	  };
	  
	  $scope.calculateRating = function() {
		  var sum = 0;
		  $scope.rate.push($scope.overStar);
		  
		  for (var i in $scope.rate) {
			  sum = sum + $scope.rate[i];
		  }
		  
		  $scope.rating = sum / $scope.rate.length;
	  };
	  
		  
		  
	  
	/*  $scope.ratingStates = [
	    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
	    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
	    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
	    {stateOn: 'glyphicon-heart'},
	    {stateOff: 'glyphicon-off'}
	  ];*/
	  
});