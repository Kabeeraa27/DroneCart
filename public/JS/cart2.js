angular.module('droneApp', []).controller('CartController', function($scope, $location) {
    
    const urlParams = new URLSearchParams(window.location.search);
    $scope.selectedDroneImageUrl = urlParams.get('imageUrl');
    if ($scope.selectedDroneImageUrl) {
        console.log('Selected Drone Image URL:', $scope.selectedDroneImageUrl);
    }
    $scope.selectedDroneId = urlParams.get('productId');
    $scope.selectedDroneDesc= urlParams.get('productDescription');
    $scope.selectedDroneName = urlParams.get('productName');
    $scope.selectedDronePrice = parseFloat(urlParams.get('productPrice'));

    // Initialize count and total price
    $scope.count = 1;
    $scope.totalPrice = $scope.selectedDronePrice || 0;

    // Calculate total price function
    $scope.calculateTotal = function() {
        return $scope.totalPrice * $scope.count;
    };

    // Increment count function
    $scope.incrementCount = function() {
        $scope.count++;
    };

    // Decrement count function
    $scope.decrementCount = function() {
        if ($scope.count > 1) {
            $scope.count--;
        }
    };

    // Checkout function
    $scope.checkout = function() {
        window.open("pay.html");
    };
});
