export module personas.Services {
  'use strict'

  export class PersonaSrv {

    public personas = {
      cargando : false,
      data : []
    };

    constructor(public $http, public $q, public $sce, public $rootScope) {
        console.log("Servicio iniciado");
        //this.realizarConexion();

        $rootScope.promise = this.cargarData();
        $rootScope.promise.then(
          function (data) {
            
            console.log(data);
          }, function (error) {
            //this.objetoPersonas.cargando = false;
            console.log(error);
          }
        );
    }

    public cargarData = () => {

      let qAjax = this.$q.defer();

      let url = "https://next.json-generator.com/api/json/get/V1PaJSXi4";
      let trustedUrl = this.$sce.trustAsResourceUrl(url);
      this.$http.jsonp(trustedUrl, {jsonpCallbackParam: 'callback'})
        .then(function(respuesta) { //respuesta, status, headers, config
          qAjax.resolve(respuesta.data);
        }, function error(respuesta) {
          console.error(respuesta);
          qAjax.reject("Error en la carga");
      });

      return qAjax.promise;
    }

    realizarConexion = ():any => {
      let url = "https://next.json-generator.com/api/json/get/V1PaJSXi4";
      let trustedUrl = this.$sce.trustAsResourceUrl(url);
      this.$http.jsonp(trustedUrl, {jsonpCallbackParam: 'callback'})
        .then(function(respuesta) { //respuesta, status, headers, config


        }, function error(respuesta) {
            console.error(respuesta);
      });
    }

  }
}
