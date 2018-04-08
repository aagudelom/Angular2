export module promesa.Controllers {


   interface IControllerPromesa {
     saludar:() => void;

  }

   export class promesaCtrl implements IControllerPromesa {


    constructor(public $scope) {
      console.log("Controller iniciado");
    }

    saludar = () => {
        console.log("Hola paco");

    }

  }
}
