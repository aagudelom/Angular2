declare module popup {
}
declare module popup.Components {
    /**
    */
    class PopupComp implements ng.IComponentOptions {
        bindings: {
            [binding: string]: string;
        };
        controller: string | Function;
        templateUrl: string | Function;
        constructor();
    }
}
declare module popup.Controllers {
    /**
     * @ngdoc controller
     * @name popup.Controllers:PopupCtrl
     * @description
     * Controlador de popup
     */
    class PopupCtrl extends OrangeFeSARQ.Controllers.ParentController {
        static $inject: string[];
        popupSrv: any;
        popupVars: {};
        $scope: any;
        /**
         * @ngdoc method
         * @name popup.Controllers:PopupCtrl#constructor
         * @param {Object} $injector componente que necesita el parent injector.
         * @methodOf popup.Controllers:PopupCtrl
         * @description
         * Incluye las dependencias necesarias y inicializa el componente con initComp
         */
        constructor($injector: any, $scope: any);
        /**
         * @ngdoc method
         * @name popup.Controllers:PopupCtrl#setInjections
         * @param {Object} $injector componente que necesita el parent injector.
         * @methodOf popup.Controllers:PopupCtrl
         * @description
         * Incluye las dependencias necesarias
         */
        setInjections($injector: any): void;
        /**
         * @ngdoc method
         * @name popup.Controllers:PopupCtrl#initComp
         * @param {Object} $injector componente que necesita el parent injector.
         * @methodOf popup.Controllers:PopupCtrl
         * @description
         * Inicializa la lógica del componente
         */
        initComp(): void;
        hidePopup(): void;
    }
}
declare module popup.Services {
    /**
     * @ngdoc service
     * @name popup.Services.PopupSrv
     * @description
     * #rest
     * Servicio que busca un cliente en funcion de distintos parámetros
     */
    class PopupSrv {
        $injector: any;
        static $inject: string[];
        genericConstant: any;
        popupVars: {};
        constructor($injector: any);
        setInjections($injector: any): void;
        /**
         * @ngdoc method
         * @name #showPopup
         * @methodOf popup.Services.PopupSrv
         * @returns {object} Devuelve una promesa con el response
         */
        showPopup(title: string, content: string, size?: string, closeText?: string): void;
        /**
         * @ngdoc method
         * @name #showPopup
         * @methodOf popup.Services.PopupSrv
         * @returns {object} Devuelve una promesa con el response
         */
        hidePopup(): void;
    }
}
