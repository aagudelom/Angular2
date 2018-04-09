System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var personas;
    return {
        setters: [],
        execute: function () {
            (function (personas) {
                var Controllers;
                (function (Controllers) {
                    "use strict";
                    var personasCtrl = (function () {
                        function personasCtrl($scope, personaSrv) {
                            this.$scope = $scope;
                            this.personaSrv = personaSrv;
                            this.alumnos = {
                                "cargando": false,
                                "data": [{}]
                            };
                            console.log("Controller iniciado");
                            this.alumnos.cargando = true;
                            this.$scope.alumnos = this.alumnos;
                            personaSrv.obtenerData(this.$scope.alumnos);
                        }
                        personasCtrl.$inject = ['$scope', 'personaSrv'];
                        return personasCtrl;
                    }());
                    Controllers.personasCtrl = personasCtrl;
                })(Controllers = personas.Controllers || (personas.Controllers = {}));
            })(personas || (personas = {}));
            exports_1("personas", personas);
        }
    };
});
//# sourceMappingURL=app-personas.controller.js.map