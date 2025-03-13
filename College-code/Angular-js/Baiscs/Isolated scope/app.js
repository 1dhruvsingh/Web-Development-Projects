var app =angular.module('myApp',[]);

app.directive('userCard',function(){
    return {
        restrict:'E',
        scope:{
           username:'@',
           age:'@'
        },
        template: '<h2>{{username}} , Age:{{age}}</h2>'
    };
});