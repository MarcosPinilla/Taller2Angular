(function(){

	angular
	.module('app')
	.controller('controladorprestamos', ['$scope','$localStorage','$window', function ($scope, $localStorage,$window){
		
		$scope.clientes = $localStorage.clientes;//capturo clientes
		$scope.capital = $localStorage.capital;//capturo capital

		//modelo para almacenar prestamos
		var prestamo = {
			nombre:'',
			dinero:'',
			cuotas:'',
		};

		//cuotas predefinidas
		$scope.cuotas=[
			{
       			id: 1,
       			n_cuotas: 1,
       			interes: 0
   			},
   			{
       			id: 2,
       			n_cuotas: 3,
       			interes: 6
		   	},
		   	{
		       	id: 3,
		       	n_cuotas: 6,
		       	interes: 15
		   	},
		   	{
		       	id: 4,
		       	n_cuotas: 9,
		       	interes: 25
		   	}
		];

		//modelo de deudas
		$scope.deudaModel = {
	       	cliente: {
               	nombre: '',
               	email: '',
               	telefono: ''
           	},
	       	cuota_id: '',
	       	cuotas: [],
	       	prestamo: '',
	       	total: ''
	   	};

	   	$scope.cuotascant = 0; //seteo cantidad de cuotas por default

		$scope.prestamos = $localStorage.prestamos || []; //se cargan prestamos de localStorage, sino es vacio

		//Funcion para pedir prestamo 
		$scope.pedirPrestamo = function($index){
			if (this.prestamo.dinero !='' && parseInt(this.prestamo.dinero) < $scope.capital )  {//pregunto si el monto pedido es menor al capital y ejecuto el prestamo
				$scope.cuotascant = this.cuotacli.n_cuotas; //le digo cuantas cuotas son las seleccionadas
				$localStorage.cuotascant = $scope.cuotascant; //guardo en localStorage

				var cuotan=[];//seteo el arreglo de cuotas a pagar

				var totalinteres= parseInt(Number(this.prestamo.dinero) + (Number(this.prestamo.dinero)*(this.cuotacli.interes/100)));//calculo el total de la deuda con interes

				var totalcuota= parseInt(totalinteres/this.cuotacli.n_cuotas);//calculo el valor de cada cuota

				for (var i = 0; i < (this.cuotacli.n_cuotas); i++) {//agrego las cuotas al arreglo de pagos
	        		cuotan.push({
	          			valor: totalcuota,//le paso el valor de cada cuota
	         			pagado: false// le digo que aun no esta pagada
	        		});
	      		}

				$scope.prestamos.push({//agrego la deuda al arreglo de prestamos
					cliente:$scope.clientes[$index],//le digo cual es el cliente
					cuota_id: this.cuotacli.id,//le digo el id de la cuota
					cuotas: cuotan,//le paso el arreglo de pagos
					prestamo: this.prestamo.dinero,//le digo cuanto es lo que pidio el cliente
					total: totalinteres//le digo cuanto es lo que pagará en total con intereses
				});
				$scope.capital = $scope.capital - parseInt(this.prestamo.dinero);//resto el prestamo al capital
				$localStorage.capital= $scope.capital;//guardo en localStorage el capital
				$localStorage.prestamos = $scope.prestamos;	//guardo en localStorage el prestamo
				$scope.cambioVista('deudas');//cambio a la vista de deudas
			}else{
				$window.alert('Capital Insuficiente, tiene que pedir menos que: '+ $scope.capital);//ventana de alerta que la cantidad pedida no es permitida
			}
			
		}

	}]);

})();