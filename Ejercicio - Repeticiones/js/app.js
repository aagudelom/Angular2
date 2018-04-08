(function(){

var app = angular.module('universidadApp',[ ]);

app.controller('listadoCtrl', ['$scope', function($scope){
	$scope.listado = ["Fernando", "Paco", "Pajaro"];

	$scope.listadoProfesores = {
		profesores: [{
			nombre: "Paco",
			edad: 30,
			clase: "Mate"
		},
	 	{
			nombre: "Pajaro",
			edad: 34,
			clase: "Sociales"
		},
		{
			nombre: "Luis",
			edad: 36,
			clase: "Español"
		}]
	}


}]);





})();
