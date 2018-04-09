import {personas as personaSrv} from "./app-personas.service.js";

export module personas.Controllers {
"use strict";

   interface IControllerPromesa {
   }


   export class personasCtrl implements IControllerPromesa {



     public alumnos = {
       "cargando":false,
       "data":[{}]
     };

     static $inject = ['$scope','personaSrv'];
       constructor(public $scope, public personaSrv:personaSrv.Services.PersonaSrv) {
       console.log("Controller iniciado");
       this.alumnos.cargando = true;
       this.$scope.alumnos = this.alumnos;                      
       personaSrv.obtenerData(this.$scope.alumnos); 
       
     }     

  }

}
