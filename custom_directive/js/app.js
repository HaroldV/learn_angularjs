var app = angular.module("CustomDirective",[]);

app.directive("myAutocomplete",function(){
	
	function link(scope,element,attrs){				
		$(element).autocomplete({
			source: scope[attrs.myAutocomplete],
			select: function(ev,ui){
				ev.preventDefault();
				if(ui.item){										
					scope.optionSelected(ui.item.value);
				}
			},
			focus: function(ev,ui){
				ev.preventDefault();				
				$(this).val(ui.item.label)
			}

		});
	};
	return {
		link: link
	};

});
app.directive("backImg",function(){
	return function(scope,element,attrs){		
	
		attrs.$observe('backImg',function(value){
			element.css({
				"background": "url('"+value+"')",
				"background-size": "cover",
				"background-position": "center"
			});
		});
	}	
});

app.controller("AppCtrl",['$scope','$http',function($scope,$http){

	$scope.repos = [];

	$http.get("https://api.github.com/users/haroldv/repos")
		.then(function(respon){
			$scope.posts = respon.data; // agregar el data

			for (var i= respon.data.length - 1; i >=0; i--){ // agrega el data
				var repo = respon.data[i];// agregar el data
				$scope.repos.push(repo.name); 

			};

		},function(err){
			console.log("Error",err);
		});

	$scope.optionSelected = function(data){
		
		$scope.$apply(function(){			
			$scope.main_repo = data;
			
		});
	}

}]);