angular.module('calcApp', []).service('discountService', function() {
    this.applyDiscount = function(price, discount) {
        return price - (price * (discount / 100));
    };
})
.controller('CalcCtrl', function($scope, discountService) {
    $scope.discountedPrice = discountService.applyDiscount(100, 20); // Fixed typo
});