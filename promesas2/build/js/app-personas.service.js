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
                        function PersonaSrv($http, $q, $sce, $rootScope) {
                            var _this = this;
                            this.$http = $http;
                            this.$q = $q;
                            this.$sce = $sce;
                            this.$rootScope = $rootScope;
                            this.personas = {
                                cargando: false,
                                data: []
                            };
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
                            this.realizarConexion = function () {
                                var url = "https://next.json-generator.com/api/json/get/V1PaJSXi4";
                                var trustedUrl = _this.$sce.trustAsResourceUrl(url);
                                _this.$http.jsonp(trustedUrl, { jsonpCallbackParam: 'callback' })
                                    .then(function (respuesta) {
                                }, function error(respuesta) {
                                    console.error(respuesta);
                                });
                            };
                            console.log("Servicio iniciado");
                            $rootScope.promise = this.cargarData();
                            $rootScope.promise.then(function (data) {
                                console.log(data);
                            }, function (error) {
                                console.log(error);
                            });
                        }
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