(function(){
	angular
	.module('app')
	.controller('controladordeudas', ['$scope','$localStorage', function ($scope, $localStorage){

		$scope.clientes = $localStorage.clientes;//capturo capital desde localStorage
		$scope.capital = $localStorage.capital;//capturo clientes
		$scope.prestamos = $localStorage.prestamos;//capturo prestamos

		$scope.deudor = {};//arreglo de deudor
		$scope.deudacli= {};//arreglo de pagos

		
	   	

		//funcion para pagar deudas de un cierto cliente
		$scope.pagarCuotas = function($index){
			$scope.cambioVista('pagar');//nos lleva a la vista de las cuotas
			$scope.deudor = $scope.prestamos[$index];// le digo cual es el deudor
			$scope.deudacli = $scope.prestamos[$index].cuotas;// le digo que esas son las cuotas para los pagos
			$localStorage.deudacli = $scope.deudacli; //guardo en localStorage
			$localStorage.deudor = $scope.deudor;//guardo en localStorage
			$localStorage.capital = $scope.capital;//guardo en localStorage
			$localStorage.prestamos = $scope.prestamos;//guardo en localStorage

		}

	}]);	
})();