angular.module('angular-friends').service('friendService', function($http){
	return {
		getFriends:function(){
			return 	$http.get("https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json")
		}
	}
})

angular.module('angular-friends').controller('friendController', function($scope, friendService){
	$scope.test = "Hello World";

	friendService.getFriends().success(function(data){
			$scope.friends = data.results;
		});

	$scope.alphabetSort = "false";
	$scope.sortOptions = [{val: "name", string: "Name"}, 
		{val: "friend_count", string: "Number of Friends"}, 
		{val: "current_location.name", string: "City"}, 
		{val: "current_location.country", string: "Country"}
		]; 

});
