(function(){
	angular
	.module('app')
	.controller('controladorpagos', ['$scope','$localStorage', function ($scope, $localStorage){

		$scope.deudor = $localStorage.deudor;//capturo el deudor

		$scope.deudacli = $localStorage.deudacli;//capturo las cuotas

		$scope.capital = $localStorage.capital;//capturo el capital

		$scope.pagarCuota= function ($index){
			$scope.capital = $scope.capital + $scope.deudacli[$index].valor; // sumo el pago de la cuota al capital
			$localStorage.capital = $scope.capital;//guardo en localStorage el capital
			$scope.deudacli[$index].pagado=true;// le digo que esta pagada
			$localStorage.deudacli = $scope.deudacli;//guardo en localStorage la deuda actual
		}
		
	}]);
})();