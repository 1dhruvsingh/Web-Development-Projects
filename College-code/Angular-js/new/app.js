var app= angular.module('myApp', []);
app.run(function($rootScope){
    $rootScope.globalMessage = "Hello World";
});

//controller A
app.controller('CtrlA', function($scope, $rootScope){
    $scope.globalMessage= $rootScope.globalMessage;
});

//controller B
app.controller('CtrlB', function($scope, $rootScope){
    $scope.globalMessage= $rootScope.globalMessage;
});