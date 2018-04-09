System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var personas;
    return {
        setters: [],
        execute: function () {
            (function (personas) {
                var Services;
                (function (Services) {
                    'use strict';
                    var PersonaSrv = (function () {
                        function PersonaSrv($http, $sce, $q, $rootScope) {
                            var _this = this;
                            this.$http = $http;
                            this.$sce = $sce;
                            this.$q = $q;
                            this.$rootScope = $rootScope;
                            this.cargarData = function () {
                                var qAjax = _this.$q.defer();
                                var url = "https://next.json-generator.com/api/json/get/V1PaJSXi4";
                                var trustedUrl = _this.$sce.trustAsResourceUrl(url);
                                _this.$http.jsonp(trustedUrl, { jsonpCallbackParam: 'callback' })
                                    .then(function (respuesta) {
                                    qAjax.resolve(respuesta.data);
                                }, function error(respuesta) {
                                    console.error(respuesta);
                                    qAjax.reject("Error en la carga");
                                });
                                return qAjax.promise;
                            };
                            this.obtenerData = function (alumnos) {
                                _this.$rootScope.promise = _this.realizarConexion();
                                _this.$rootScope.promise.then(function (data) {
                                    alumnos.cargando = false;
                                    alumnos.data = data;
                                }, function (error) {
                                    console.error(error);
                                });
                                return _this.alumnos;
                            };
                            this.realizarConexion = function () {
                                var url = "https://next.json-generator.com/api/json/get/V1PaJSXi4";
                                var trustedUrl = _this.$sce.trustAsResourceUrl(url);
                                var resultado = _this.$http.jsonp(trustedUrl, { jsonpCallbackParam: 'callback' })
                                    .then(function (respuesta) {
                                    return respuesta;
                                }, function error(respuesta) {
                                    console.error(respuesta);
                                });
                                return resultado;
                            };
                            console.log("Servicio iniciado");
                        }
                        PersonaSrv.$inject = ['$http', '$sce', '$q', '$rootScope'];
                        return PersonaSrv;
                    }());
                    Services.PersonaSrv = PersonaSrv;
                })(Services = personas.Services || (personas.Services = {}));
            })(personas || (personas = {}));
            exports_1("personas", personas);
        }
    };
});
//# sourceMappingURL=app-personas.service.js.map