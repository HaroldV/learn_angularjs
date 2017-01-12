var app = angular.module("CustomDirective",[]);

app.directive("backImg",function(){
	return function(scope,element,attrs){		
	
		attrs.$observe('backImg',function(value){
			element.css({
				"background": "url("+value+")",
				"background-size": "cover",
				"background-position": "center"
			});
		});
	
	}	
	
	
});

app.controller("AppCtrl",['$scope','$http',function($scp,$http){

	$http.get("https://api.github.com/users/haroldv/repos")
		.then(function(respon){
			console.log(respon.data);
			$scp.repos = respon.data;
		},function(err){
			console.log("Error",err);
		});

}]);