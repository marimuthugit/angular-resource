"use strict";

app.factory("loginServices",function($http,$location,sessionServices){
	return {
			login : function(data,scope){
				var $promise = $http.post("data/ajax.php",data);
				$promise.then(function(msg){
					if(msg.data){
						sessionServices.set('user',msg.data);
						$location.path('/home');
					}else{
						scope.errorTxt = "Invalid Login";
						$location.path('/login');
					}
				});
			},
			logout : function(){
				sessionServices.destroy('user');
				$location.path('/login');
			},
			isLogged : function(){
				return $http.post("data/check_session.php");
			}
	}
});