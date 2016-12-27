var app = angular.module("MyFirstApp",[]);

app.controller("FirstController",function($scope){

	$scope.nombre ="Harold Villalobos";
	$scope.nuevoComentario = {};
	
	$scope.comentarios = [
		{
			comentario:"Buen comentario",
			username: "HaroldV"
		},
		{
			comentario:"Maleesemo comentario",
			username:"Otro Usuario"
		}
	];


	$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario={};
	}
});
