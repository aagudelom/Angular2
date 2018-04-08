import "angular"
import {promesa} from "./app-promesa.controller.js";

export module promesaapp {

  angular.module('promesaapp', [])
    .controller('promesaappCtrl', promesa.Controllers.promesaCtrl);

}
