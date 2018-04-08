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
                    var promesaCtrl = (function () {
                        function promesaCtrl($scope) {
                            this.$scope = $scope;
                            this.saludar = function () {
                                console.log("Hola paco");
                            };
                            console.log("Controller iniciado");
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