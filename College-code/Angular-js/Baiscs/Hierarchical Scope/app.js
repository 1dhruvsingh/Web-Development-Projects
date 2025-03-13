angular.module('myApp',[]).controller('ParentCtrl',function($scope){
    $scope.message = "Hello From Parent";
}).controller('ChildCtrl',function($scope){
    $scope.childMessage = "Hellow from child";
});