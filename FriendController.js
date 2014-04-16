var friendController = function($scope, $http){
	$scope.test = "Hello World";
	// $http({method: 'GET', url: "https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json"}).
	// 	success(function(data){
	// 		$scope.friends = data.results;
	// 	}).
	// 	error(function(){
	// 		return "http GET failed";
	// 	});
	$http.get("https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json").success(function(data){
			$scope.friends = data.results;
		});
}