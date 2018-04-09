export module personas.Services {
  'use strict'

  export class PersonaSrv {
    
    
    /*alumnos = {
      "cargando" : false,
      "data" : [{}]
    }*/

    static $inject = ['$http', '$sce', '$q', '$rootScope'];
        constructor(public $http, public $sce, public $q, public $rootScope) {
        console.log("Servicio iniciado");        
       
        //this.realizarConexion();
        /*$rootScope.promise = this.cargarData();
        $rootScope.promise.then(
          function (data) {            
            //console.log(data);
          }, function (error) {
            //this.objetoPersonas.cargando = false;
            console.log(error);
          }
        );*/

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

    public obtenerData = (alumnos): any =>{
      this.$rootScope.promise = this.realizarConexion();
      this.$rootScope.promise.then(
          function (data) {                           
            alumnos.cargando = false;
            alumnos.data = data;
          }, function (error) {            
            console.error(error);
          }
        );      
      return this.alumnos;
    }

    public realizarConexion = ():any => {
      let url = "https://next.json-generator.com/api/json/get/V1PaJSXi4";
      let trustedUrl = this.$sce.trustAsResourceUrl(url);
      let resultado = this.$http.jsonp(trustedUrl, {jsonpCallbackParam: 'callback'})
        .then(function(respuesta) { //respuesta, status, headers, config                 
          return respuesta;
        }, function error(respuesta) {
            console.error(respuesta);
      });      
      return resultado;
    }

  }
}
