var app = angular.module('mainModule',[]);

app.run(function($rootScope){
	$rootScope.nombre = "(app.run) rootScope";
});

app.controller('FatherController',['$scope',function($scp){

	$scp.nombre = "(Fatherer) Father";

	setTimeout(function(){
		$scp.$apply(function(){
			$scp.nombre = "=P";
		})
	},2000);

}]);


app.controller('ChildController',['$scope',	function($scp){

	$scp.nombre = "(ChildController) Harold Villalobos";
	
}]);
