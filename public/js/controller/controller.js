var app = angular.module("myApp", []);
app.controller("AppCtrl", ['$scope', '$http', function ($scope, $http) {

	var userData = function() {
		$http.get('/app/userData').success(function(response) {
			$scope.username = response.login;
            $scope.fname= response.fname;
            $scope.lname = response.lname;
		});
	};

	userData();

	$scope.logout = function() {
		$scope.logout = "/";
        
		$http.get('/app/logout').success(function(response) {
			$scope.username = "";
            $scope.fname ="";
            $scope.lname = "";
		});
	};
    
    $scope.listaCursos = function(){
        
        $http.get('/app/listaCursos').success(function(response){
            $scope.listaCursos = response;
            
        });
        
        
    };
    
    $scope.esconde = function(){
        
   /*for (var i = 0, i < $scope.listaCursos.length; i++) {
     
       document.getElementById(i.code).addClass(".hide");
     
    }  */ 

    };
    
    
    $scope.despliega = function(code){
       // $scope.esconde();
        
        
        
    }
    
    
       
}]); //final controller