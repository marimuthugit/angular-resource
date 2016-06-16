"use strict";

app.controller("homeCtrl",function($scope,loginServices){
	$scope.user = "Marimuthu";
	
	$scope.logout = function(){
		loginServices.logout();
	}
});