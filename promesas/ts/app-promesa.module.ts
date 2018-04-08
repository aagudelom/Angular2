import "angular"
import {promesa} from "./app-promesa.controller.js";

export module promesaapp {
  "use strict";
  angular.module('promesaapp', [])
    .controller('promesaappCtrl', promesa.Controllers.promesaCtrl);

}
