angular.module('droneApp').controller('CartController', function($scope, $location, $window) {

    const urlParams = new URLSearchParams($location.search());
    $scope.productId = urlParams.get('productId');
    $scope.imageUrl = urlParams.get('imageUrl');
    $scope.productPrice = parseFloat(urlParams.get('productPrice'));
    
    $scope.cartItems = [];

    $scope.calculateTotal = function() {
        let total = 0;
        for (let i = 0; i < $scope.cartItems.length; i++) {
            total += parseFloat($scope.cartItems[i].price);
        }
        return total;
    };

    $scope.totalAmount = $scope.calculateTotal();

    $scope.addToCart = function() {
        $scope.cartItems.push({
            name: $scope.productId,
            imageUrl: $scope.imageUrl,
            price: $scope.productPrice
        });
        alert('Added ' + $scope.productId + ' to cart');

        $window.location.href = 'CARTPAGE.html';
    };
});
