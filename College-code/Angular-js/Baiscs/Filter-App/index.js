angular.module('filterApp',[]).filter('capitalize',function(){
 return function(input){
    return input.charAt(0).toUpperCase()+ input.slice(1).toLowerCase();};
 })
 .controller('FilterCtrl',function($scope){
    $scope.text='hello, world';
 })