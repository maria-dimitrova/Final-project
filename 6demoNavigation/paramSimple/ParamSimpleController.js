MainApp.controller('ParamSimpleController', function ($scope, $route, $routeParams, $location) {
    $scope.simpleParam = $routeParams.simpleParam;
    console.log($routeParams);
});