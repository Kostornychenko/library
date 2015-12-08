
app.controller('main', ['$q', '$scope', '$timeout', '$http', function ($q, $scope, $timeout,$http) {
  
  $scope.selected = [];
  $scope.desserts = {};
  	$scope.listShow = function(){
	  $http({
	   method: 'GET',
	   url:'/test.json'
        }).then(function(res){
	       $scope.desserts = res.data[1];
	       $scope.desserts.count = 99;
	       console.log("успех");
	       console.log($scope.desserts);
	   }, function(res){
	        console.log('запрос не выполнен');
	    });  
	};
  
  $scope.query = {
    order: 'name',
    limit: 5,
    page: 1
  };
  
  
  
  $scope.getTypes = function () {
    return ['Ip1', 'Ip2', 'Ip3', 'Ip4'];
  };
  
  $scope.onpagechange = function(page, limit) {
    var deferred = $q.defer();
    
    $timeout(function () {
      deferred.resolve();
    }, 500);
    
    return deferred.promise;
  };
  
  $scope.onorderchange = function(order) {
    var deferred = $q.defer();
    
    $timeout(function () {
      deferred.resolve();
    }, 500);
    
    return deferred.promise;
  };
}]);