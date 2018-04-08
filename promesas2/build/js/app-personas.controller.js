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
                            console.log("Controller iniciado");
                        }
                        personasCtrl.$inject = ['personaSrv'];
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