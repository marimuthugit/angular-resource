"use strict";

app.controller("loginCtrl",function($scope,loginServices){
	
	$scope.login = function(user){
		loginServices.login(user,$scope);
	};
});