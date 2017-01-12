var app = angular.module('ToDoList',['LocalStorageModule']);

app.factory('ToDoService',function(localStorageService){

	var toDoService = {};
	
	toDoService.key = "angular-todoList";

	if(localStorageService.get(toDoService.key)){
		toDoService.activities = localStorageService.get(toDoService.key);
	}else{
		toDoService.activities = [];
	}	

	toDoService.add = function(newAct){
		console.log(newAct);
		toDoService.activities.push(newAct);
		toDoService.updaLocalStorage();
	};

	toDoService.updaLocalStorage = function(){
		localStorageService.set(toDoService.key,toDoService.activities);
	};

	toDoService.clean = function(){
		
		toDoService.activities = [];
		toDoService.updaLocalStorage();
		return toDoService.getAll();
	};

	toDoService.getAll =  function(){
		return toDoService.activities;
	};

	toDoService.removeItem = function(item){
		toDoService.activities = toDoService.activities.filter(function(activity){
			return activity !== item;
		});
		toDoService.updaLocalStorage();
		return toDoService.getAll();
	};

	return toDoService;

});

// Este Caso es solo para cuando vamos a usar
// un "service" en ves de un factory
// seria de la siguiente forma
// Primero no se retornaria nada y el toDoService se 
// cambia por un this.
// app.service('ToDoService',function(localStorageService){
	
// 	this.key = "angular-todoList";

// 	if(localStorageService.get(this.key)){
// 		this.activities = localStorageService.get(this.key);
// 	}else{
// 		this.activities = [];
// 	}	

// 	this.add = function(newAct){
// 		console.log(newAct);
// 		this.activities.push(newAct);
// 		this.updaLocalStorage();
// 	};

// 	this.updaLocalStorage = function(){
// 		localStorageService.set(this.key,this.activities);
// 	};

// 	this.clean = function(){
		
// 		this.activities = [];
// 		this.updaLocalStorage();
// 		return this.getAll();
// 	};

// 	this.getAll =  function(){
// 		return this.activities;
// 	};

// 	this.removeItem = function(item){
// 		this.activities = this.activities.filter(function(activity){
// 			return activity !== item;
// 		});
// 		this.updaLocalStorage();
// 		return this.getAll();
// 	};

// });

app.controller('ToDoController',['$scope','ToDoService',
		function($scope,ToDoService){
	
	$scope.todo = ToDoService.getAll();

	$scope.newActv = {};

	$scope.addAct = function(){		
		ToDoService.add($scope.newAct);
		$scope.newAct = {};
	}

	$scope.removeAct = function(item){
		$scope.todo = ToDoService.removeItem(item);
	}

	$scope.clean = function(){
		$scope.todo = ToDoService.clean();
	}

}]);
