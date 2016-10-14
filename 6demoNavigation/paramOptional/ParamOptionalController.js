MainApp.controller('ParamOptionalController', function ($scope, $route, $routeParams, $location) {
    $scope.optionalParam = $routeParams.optionalParam;
});