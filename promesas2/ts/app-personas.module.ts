import "angular"
import {personas} from "./app-personas.controller.js";
import {personas as personaServ} from "./app-personas.service.js";

export module personasapp {
  "use strict";
  angular.module('promesaapp', [])
    .controller('personasCtrl', personas.Controllers.personasCtrl)
    .service('personaSrv', personaServ.Services.PersonaSrv);
}
