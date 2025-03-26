var app = angular.module('userApp', ['ngRoute']);

        app.config(function($routeProvider) {
            $routeProvider
                .when('/login', {
                    template: document.getElementById('loginTemplate').innerHTML,
                    controller: 'LoginController'
                })
                .when('/register', {
                    template: document.getElementById('registerTemplate').innerHTML,
                    controller: 'RegisterController'
                })
                .otherwise({ redirectTo: '/login' });
        });

        app.controller('LoginController', function($scope) {
            $scope.user = {};
            $scope.submitLogin = function() {
                if ($scope.loginForm.$valid) {
                    alert('Login Successful!');
                }
            };
        });

        app.controller('RegisterController', function($scope) {
            $scope.user = {};
            $scope.submitRegister = function() {
                if ($scope.registerForm.$valid) {
                    alert('Registration Successful!');
                }
            };
        });