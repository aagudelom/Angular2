System.register(["angular", "./app-promesa.controller.js"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_promesa_controller_js_1, promesaapp;
    return {
        setters: [
            function (_1) {
            },
            function (app_promesa_controller_js_1_1) {
                app_promesa_controller_js_1 = app_promesa_controller_js_1_1;
            }
        ],
        execute: function () {
            (function (promesaapp) {
                "use strict";
                angular.module('promesaapp', [])
                    .controller('promesaappCtrl', app_promesa_controller_js_1.promesa.Controllers.promesaCtrl);
            })(promesaapp || (promesaapp = {}));
            exports_1("promesaapp", promesaapp);
        }
    };
});
//# sourceMappingURL=app-promesa.module.js.map