/**
 * 
 */

app.controller('galleryCtrl', function ($scope){
	 $scope.rate;
	  $scope.max = 10;
	  $scope.isReadonly = false;
	  $scope.rating = 5;

	  $scope.hoveringOver = function(value) {
	    $scope.overStar = value;
	    $scope.percent = 100 * (value / $scope.max);
	  };

	/*  $scope.ratingStates = [
	    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
	    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
	    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
	    {stateOn: 'glyphicon-heart'},
	    {stateOff: 'glyphicon-off'}
	  ];*/
	  
});