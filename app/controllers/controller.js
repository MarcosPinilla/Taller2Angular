(function () {
	angular.module('app').controller('controladoraplicacion', ['$scope','$localStorage', function ($scope, $localStorage) { // creacion del controlador 
		
		$scope.menu='app/views/clientes.html';//asociacion de la vista

		$scope.cambioVista= function (menu) {//funcion que cambia vistas

			$scope.menu = 'app/views/'+menu+'.html';//cambio la vista cambiando la ruta de la asociacion
		}

		//el capital
		var capital=0;

		
		$scope.capital = $localStorage.capital || 15000000; // capital actual, sino hay en  localstorage se le asigna 150000000

		

		
		

		
	}]);
})();;