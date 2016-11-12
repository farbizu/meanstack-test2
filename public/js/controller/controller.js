var app = angular.module("myApp", []);
app.controller("AppCtrl", ['$scope', '$http', function ($scope, $http) {

    var userData = function () {
        $http.get('/app/userData').success(function (response) {
            $scope.username = response.login;
            $scope.fname = response.fname;
            $scope.lname = response.lname;
        });
    };

    userData();

    $scope.logout = function () {
        //$scope.logout = "/";

        $http.get('/app/logout').success(function (response) {
            $scope.logout = "/";
            $scope.username = "";
            $scope.fname = "";
            $scope.lname = "";
        });
    };

    $scope.listaCursos = function () {

        $http.get('/app/listaCursos').success(function (response) {
            $scope.listaCursos = response;
            $scope.esconde();
        });


    };

       $scope.desplegar = function (code) {
      
        
        if ($('#' + code).is(":hidden")) {
            
            
             $('#' + code).removeAttr("style");
            
        } else {
           $('#' + code).attr("style", "display:none");
        }
        
        
    };



}]); //final controller