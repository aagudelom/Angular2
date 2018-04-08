import {personas as personaSrv} from "./app-personas.service.js";

export module personas.Controllers {
"use strict";

   interface IControllerPromesa {
   }


   export class personasCtrl implements IControllerPromesa {
     public cantidad:number;

     static $inject = ['personaSrv'];
     constructor(public $scope, public personaSrv: personaSrv.Services.PersonaSrv) {
       console.log("Controller iniciado");

       //console.log(this.personaSrv.objetoPersonas);
       //$scope.personas = this.personaSrv.objetoPersonas;

     }

  }

}
