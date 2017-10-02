(function(){
	'use strict';

	angular
	.module('app')
	.controller('controladorcliente', ['$scope','$localStorage','$window', function ($scope, $localStorage,$window){

		//para asociar al modelo de los input en el html cliente
		$scope.nuevoCliente = {
			nombre:'',
			email:'',
			telefono:''
		};

		$scope.capital = $localStorage.capital; //captura capital de localStorage
		$scope.clientes = $localStorage.clientes || []; // se cargan clientes de localStorage, sino es vacio
		$scope.prestamos = $localStorage.prestamos;// se cargan los prestamos realizados

		//Funcion para añadir clientes
		$scope.addCliente = function(modelo){
			if (modelo.nombre != '' && modelo.email != '' && modelo.telefono != ''){//valida que no sean vacios los campos que se envian del html, ya sea por la expresion regular o no
        		$scope.clientes.push({nombre:modelo.nombre, email:modelo.email, telefono:modelo.telefono});//agrega el cliente a el arreglo
        		$localStorage.clientes = $scope.clientes;// guardo en localstorage
        		modelo.nombre = '';//reset campo
     			modelo.email = '';//reset campo
      			modelo.telefono = '';//reset campo
      		}else{
      			$window.alert('Campos incorrectos, intente nuevamente');//mensaje de campos incorrectos
      			modelo.nombre = '';
     			modelo.email = '';
      			modelo.telefono = '';
      		}			
		}

		//Funcion para eliminar un cliente
		$scope.removeCliente = function($index){
			$scope.clientes.splice($index,1);//elimino cliente con splice
			$localStorage.clientes = $scope.clientes;
		}

		//Funcion para actualizar cliente
		$scope.updateCliente = function ($index, modelo) {
	      if (modelo.nombre != '' && modelo.email != '' && modelo.telefono != ''){//valida que no sean vacios los campos que se envian del html, ya sea por la expresion regular o no
	        $scope.clientes[$index].nombre = modelo.nombre;
	        $scope.clientes[$index].email = modelo.email;
	        $scope.clientes[$index].telefono = modelo.telefono;//se actualiza el cliente
	        $localStorage.clientes = $scope.clientes;//se guarda en localStorage
	      }else{
	      	$window.alert('Campos incorrectos, intente nuevamente');//mensaje de campos incorrectos
  			modelo.nombre = '';
 			modelo.email = '';
  			modelo.telefono = '';
	      }

	      modelo.nombre = '';
	      modelo.email = '';
	      modelo.telefono = '';//reset valores
	    }
	}]);
})();