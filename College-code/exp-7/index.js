var app = angular.module("shoppingApp", []);
app.controller("cartController", function($scope) {
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
});