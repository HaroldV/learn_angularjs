var app = angular.module('mainModule',[]);

app.controller('ApplyController',['$scope',	function($scp){

	$scp.nombre = "Harold Villalobos";
	$scp.i=0;
	setInterval(function(){
		$scp.$apply(function(){
			$scp.nombre = "Eduardo "+$scp.i;
			console.log($scp.nombre);
		});
		$scp.i++;
	},2000);

}]);
