var app = angular.module("myapp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html",
		controller  : "getDetail" 
    })
   
});

app.controller("getDetail", function($scope,serviceCall){
	$scope.cards=serviceCall.getData();
	$scope.Opendetails = function(userId) {
		if ($scope.card.userId){
			
			$scope.onClickFlag=true;
			var me = $scope.cards;
			$scope.name=me.name;
			$scope.username=me.username;
			$scope.email=me.email;
			$scope.street=me.address.street;
			$scope.suite=me.address.suite;
			$scope.city=me.address.city;
			$scope.zipcode=me.address.zipcode;
			$scope.lat=me.address.geo.lat;
			$scope.lng=me.address.geo.lng;
			$scope.phone=me.phone;
		}
	};

});

app.factory('serviceCall', ['$http', function ($http) {

    var urlBase = 'http://jsonplaceholder.typicode.com';
   getData = function () {
        return $http.get(urlBase+'/users');
    };
    return getData;

}]);