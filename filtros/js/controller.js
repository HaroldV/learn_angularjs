var app = angular.module("mainModule",[]);
app.filter("removeHtml",function(){
	return function(texto){
		return String(texto).replace(/<[^>]+>/gm,'');
	}
})
app.controller("FilterController",['$scope',function($scp){

	$scp.mi_html = "<p>Eliminando el <b>HTML</b></p>";
	
	$scp.mi_json = {};	
	$scp.mi_json.title=" Title";
	$scp.mi_json.body=" Body";

	$scp.moneda = 232.32;

}]);