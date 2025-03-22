var app = angular.module("employeeApp", []);

        // Service
        app.service("employeeService", function() {
            this.getEmployees = function() {
                return [
                    { name: "Alice Johnson", role: "Manager", salary: 85000 },
                    { name: "Bob Smith", role: "Developer", salary: 70000 },
                    { name: "Charlie Brown", role: "Designer", salary: 65000 },
                    { name: "David Lee", role: "HR", salary: 60000 },
                    { name: "Emma Watson", role: "Marketing", salary: 72000 }
                ];
            };
        });

        // Controller
        app.controller("employeeController", function($scope, employeeService) {
            $scope.employees = employeeService.getEmployees();
        });

        // Filter for currency formatting
        app.filter("currencyFormat", function() {
            return function(input) {
                return input.toLocaleString();
            };
        });