var app = angular.module("shoppingApp", []);

app.controller("cartController", function($scope) {
    $scope.products = [
        {name: 'Laptop', price: 50000, quantity: 0},
        {name: 'Phone', price: 20000, quantity: 0},
        {name: 'Headphones', price: 3000, quantity: 0},
        {name: 'Smart Watch', price: 8000, quantity: 0},
        {name: 'Camera', price: 45000, quantity: 0}
    ];

    $scope.addToCart = function(product) {
        product.quantity++;
    };

    $scope.removeFromCart = function(product) {
        if (product.quantity > 0) {
            product.quantity--;
        }
    };

    $scope.getTotal = function() {
        let total = 0;
        angular.forEach($scope.products, function(product) {
            total += product.quantity * product.price;
        });
        return total;
    };

    $scope.getTotalItems = function() {
        let count = 0;
        angular.forEach($scope.products, function(product) {
            count += product.quantity;
        });
        return count;
    };
});