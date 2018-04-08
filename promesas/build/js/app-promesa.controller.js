System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var promesa;
    return {
        setters: [],
        execute: function () {
            (function (promesa) {
                var Controllers;
                (function (Controllers) {
                    "use strict";
                    var promesaCtrl = (function () {
                        function promesaCtrl($scope, $q) {
                            var _this = this;
                            this.$scope = $scope;
                            this.$q = $q;
                            this.sumar = function (num) {
                                var q = _this.$q.defer();
                                var valido = true;
                                num++;
                                setTimeout(function () {
                                    if (valido) {
                                        q.resolve(num);
                                    }
                                    else {
                                        q.reject('No sé sumar');
                                    }
                                }, 2000);
                                return q.promise;
                            };
                            this.saludar = function () {
                                console.log("Hola paco");
                            };
                            console.log("Controller iniciado");
                            this.cantidad = 0;
                            $scope.cantidad = this.cantidad;
                            $scope.promise = this.sumar(1);
                            $scope.promise.then(function (valor) {
                                console.log("Promesa cumplida");
                                $scope.cantidad = valor;
                            }, function (error) {
                                console.error(error);
                            });
                        }
                        return promesaCtrl;
                    }());
                    Controllers.promesaCtrl = promesaCtrl;
                })(Controllers = promesa.Controllers || (promesa.Controllers = {}));
            })(promesa || (promesa = {}));
            exports_1("promesa", promesa);
        }
    };
});
//# sourceMappingURL=app-promesa.controller.js.map