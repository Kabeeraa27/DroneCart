angular.module('droneApp', []).controller('DroneController', function($scope, $window, $location) {
    $scope.drones = [
        { id: 'drone1', name: 'DJI Mavic 3 pro', description: 'The DJI Mavic 3 Pro is a flagship drone renowned for its cutting-edge technology and exceptional performance in aerial photography and videography. With its advanced features, the Mavic 3 Pro offers professional-grade capabilities to both enthusiasts and industry professionals. At the heart of the Mavic 3 Pro is its state-of-the-art camera system, featuring a large 1-inch CMOS sensor capable of capturing stunning 20-megapixel photos and 5.1K video at 50 frames per second (fps). This high-resolution imagery is enhanced by a 4-axis mechanical gimbal, ensuring smooth and stable footage even in challenging conditions. Equipped with an array of intelligent flight modes, the Mavic 3 Pro offers unparalleled ease of use and versatility. Autonomous features such as ActiveTrack 5.0, Point of Interest (POI), and Spotlight Pro enable precise control over the drones movements, allowing users to focus on capturing the perfect shot. The Mavic 3 Pro boasts an impressive flight performance, with a maximum speed of 18 meters per second (m/s) and a maximum flight time of up to 46 minutes, thanks to its high-capacity battery. Its advanced obstacle sensing system, comprised of omnidirectional sensors and advanced AI algorithms, ensures safe and reliable navigation in complex environments.', imageUrl: 'drones\\d1.png', price: 120000 },
        { id: 'drone2', name: 'DJI Inspire 2', description: 'The DJI Inspire 2 represents a pinnacle in drone technology, tailored for professional aerial cinematography. Its hallmark lies in its unparalleled performance and robust design. At its core, the Inspire 2 features a powerful propulsion system, boasting dual batteries for extended flight times of up to 27 minutes, enabling filmmakers to capture uninterrupted footage. Equipped with a Zenmuse X7 camera, the Inspire 2 delivers cinematic excellence, offering stunning 6K video at 30 frames per second (fps) and 24-megapixel stills. The integrated CineCore 2.1 image processing system ensures high-quality footage, while the 360-degree rotating gimbal provides unmatched stability and precision. Intelligent flight modes such as ActiveTrack 2.0 and Spotlight Pro facilitate effortless tracking and dynamic shots, empowering filmmakers to unleash their creativity. With an advanced obstacle sensing system and dual-operator control, the Inspire 2 ensures safe and precise flight operations even in challenging environments. Its versatile design allows for swift deployment and easy transportation, making it an indispensable tool for professional filmmakers and aerial cinematographers seeking to elevate their craft.', imageUrl: 'drones\\d2.jpg', price: 270000 },
        { id: 'drone3', name: 'MI Hexacopter 2', description: 'This is Drone 3', imageUrl: 'drones\\d3.jpg', price: 35000 },
        { id: 'drone4', name: 'Eachine Pocket Drone 2.0', description: 'This is Drone 4', imageUrl: 'drones\\d4.jpg', price: 7000 },
        { id: 'drone5', name: 'DJI Air 2S', description: 'This is Drone 5', imageUrl: 'drones\\d5.png', price: 80000 },
        { id: 'drone6', name: 'DJI Inspire 3', description: 'This is Drone 6', imageUrl: 'drones\\d6.jpg', price: 320000 },
        { id: 'drone7', name: 'DJI Mavic 3 Modified', description: 'This is Drone 7', imageUrl: 'drones\\d7.jpg', price: 90000 },
        { id: 'drone8', name: 'DJI Mavic Pro', description: 'This is Drone 8', imageUrl: 'drones\\d8.jpg', price: 40000 }
    ]; 

    $scope.addToCart = function(drone) {
        var url = 'CARTPAGE.html';
        url += '?productId=' + drone.id + '&imageUrl=' + drone.imageUrl + '&productPrice=' + drone.price;
        url += '&productName=' + encodeURIComponent(drone.name) + '&productDescription=' + encodeURIComponent(drone.description);
        $window.location.href = url;
    };

     $scope.add = function() {
        var newItem = {
            'name': $scope.item, 
            'quantity': $scope.quantity, 
            'price': $scope.price
        };
        
        $scope.drones.push(newItem);
    };

});
