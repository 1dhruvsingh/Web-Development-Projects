//Define the AngularJs module
let app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    .when('/home',{
        template:'<h2> Welcome to the Home Page! </h2><p>This is the home page </p>'
    })
    .when('/about',{
         template:'<h2> About us </h2><p>This is the About page </p>'
    })
    .when('/contact',{
        template:'<h2> Contact Us </h2><p>This is the contact us page </p>'
    })
    .otherwise({
        redirectTo:'/home'
    });
});