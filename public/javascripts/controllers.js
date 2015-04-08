var myApp = angular.module('myApp', []);

myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.mainTitle = "Angular Artists";
	console.log('Hello From Controller');
}]);