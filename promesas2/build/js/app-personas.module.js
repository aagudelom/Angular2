System.register(["angular", "./app-personas.controller.js", "./app-personas.service.js"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_personas_controller_js_1, app_personas_service_js_1, personasapp;
    return {
        setters: [
            function (_1) {
            },
            function (app_personas_controller_js_1_1) {
                app_personas_controller_js_1 = app_personas_controller_js_1_1;
            },
            function (app_personas_service_js_1_1) {
                app_personas_service_js_1 = app_personas_service_js_1_1;
            }
        ],
        execute: function () {
            (function (personasapp) {
                "use strict";
                angular.module('promesaapp', [])
                    .controller('personasCtrl', app_personas_controller_js_1.personas.Controllers.personasCtrl)
                    .service('personaSrv', app_personas_service_js_1.personas.Services.PersonaSrv);
            })(personasapp || (personasapp = {}));
            exports_1("personasapp", personasapp);
        }
    };
});
//# sourceMappingURL=app-personas.module.js.map