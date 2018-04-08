export module promesa.Controllers {
"use strict";

   interface IControllerPromesa {
     saludar:() => void;
     cantidad:number;
  }

   export class promesaCtrl implements IControllerPromesa {
     public cantidad:number;

    constructor(public $scope, public $q) {
      console.log("Controller iniciado");
      this.cantidad = 0;
      $scope.cantidad = this.cantidad;
      $scope.promise = this.sumar(1);
      $scope.promise.then((valor) => {
        console.log("Promesa cumplida");
        $scope.cantidad = valor;
      },
       (error) => {
         console.error(error);
       });
    }

    sumar = (num:number) => {
      let q = this.$q.defer();
      let valido:boolean = true;
      num++;
      setTimeout(() => {
        if(valido) {
          q.resolve(num);
        } else {
          q.reject('No sé sumar');
        }
      }, 2000);

      return q.promise;
    }

    saludar = () => {
        console.log("Hola paco");
    }

  }
}
