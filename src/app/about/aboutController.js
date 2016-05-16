angular.module('app.about', [])
    .controller('aboutController', function($scope){
        $scope.title = 'About';
        $scope.body = 'Peter is a fullstack Javascript engineer that loves ice cream and travel';
    });