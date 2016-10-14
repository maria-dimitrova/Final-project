MainApp.controller('ParamSlashesController', function ($scope, $route, $routeParams, $location) {
    $scope.param = $routeParams.slashesParam;
    console.log($routeParams);
});