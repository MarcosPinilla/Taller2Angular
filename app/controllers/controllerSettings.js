(function(){
	angular
	.module('app')
	.controller('controladorsettings', ['$scope','$localStorage', function ($scope, $localStorage){

		$scope.capital = $localStorage.capital;//capturo el capital
		$scope.clientes = $localStorage.clientes;//capturo los clientes
		$scope.prestamos = $localStorage.prestamos;//capturo los prestamos
		$scope.deudor = $localStorage.deudor;//capturo los deudores
		$scope.deudacli = $localStorage.deudacli;//capturo los pagos de deudores
		
		$scope.resetCapital= function (){//reseteo capital de local Storage
			$localStorage.capital = 15000000;
			$scope.capital = $localStorage.capital;
		}
		$scope.resetClientes= function (){//elimina clientes de localStorage
			delete $localStorage.clientes;
			
		}
		$scope.resetPrestamos= function (){//elimina Prestamos de localStorage
			delete $localStorage.prestamos;
			
		}
		$scope.resetDeudores= function (){//elimina deudores y deudas de localStorage
			delete $localStorage.deudor;
			delete $localStorage.cuotacli;
		}

	}]);
})();