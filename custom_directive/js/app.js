var app = angular.module("CustomDirective",[]);

app.directive("myAutocomplete",function(){
	
	function link(scope,element,attrs){
		$(element).autocomplete({
			source: scope[attrs.myAutocomplete],
			select: function(ev,ui){
				ev.prevenDefault();
				if(ui.item){
					scope.optionSelected(ui.item.value);
				}
			},
			focus: function(ev,ui){
				ev.prevenDefault();
				alert("OLA")
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

app.controller("AppCtrl",['$scope','$http',function($scp,$http){

	$scp.repos = [];

	$http.get("https://api.github.com/users/haroldv/repos")
		.then(function(respon){
			$scp.posts = respon.data;

			for (var i= respon.length - 1; i >=0; i--){
				var repo = respon[i];
				$scp.repos.push(repo.name);

			};

		},function(err){
			console.log("Error",err);
		});

	$scp.optionSelected = function(data){
		
		$scp.$apply(function(){
			console.log("OPtionSelected=",data);
			$scp.main_repo = data;
		});
	}

}]);