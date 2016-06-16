"use strict";

var app = angular.module("app",['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when("/login",{
		templateUrl: 'login.html',
		controller:'loginCtrl'
	});
	
	$routeProvider.when("/home",{
		templateUrl: 'home.html',
		controller : 'homeCtrl',
	});
	
	$routeProvider.otherwise({ 
		redirectTo : '/login'
	});
}]);
app.run(function($rootScope,$location,loginServices){
	$rootScope.$on("$routeChangeStart",function(){
		var connected = loginServices.isLogged();
		connected.then(function(msg){
			if(!msg.data)
				$location.path('login');
		});
	});
});
	
