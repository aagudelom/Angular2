/**
 * @ngdoc overview
 * @name spinnerBlock
 *
 * @description
 * Módulo que contiene componente <consumption-frame-comp></consumption-frame-comp>
 *
 *
 */
declare module spinnerBlock {
}
declare module spinnerBlock.Components {
    class SpinnerBlockComp extends OrangeFeSARQ.Components.ParentComponent {
        controller: string | Function;
        templateUrl: string | Function;
        constructor();
    }
}
declare module spinnerBlock.Controllers {
    /**
     * @ngdoc controller
     * @name SpinnerBlock.Controllers:SpinnerBlockCtrl
     * @author Javier Molina <francisco.javier.molina.sanchez@everis.com>
     * @description
     * Controlador de spinner-block-comp
     */
    class SpinnerBlockCtrl extends OrangeFeSARQ.Controllers.ParentController {
        $injector: any;
        private $scope;
        static $inject: string[];
        private dataLine;
        private customerView;
        private msisdn;
        private SpinnerBlockSrv;
        spinnerIsVisible: boolean;
        spinnerBlockSrv: spinnerBlock.Services.SpinnerBlockSrv;
        /**
         * @ngdoc method
         * @name SpinnerBlock.Controllers:SpinnerBlockCtrl#constructor(private SpinnerBlockCompOWCSStore, private directAccessCompOWCSStore, private SpinnerBlockSrv, private msisdnStore, private customerViewStore)
         * @methodOf SpinnerBlock.Controllers:SpinnerBlockCtrl
         * @description
         * Constructor de SpinnerBlockCtrl
         */
        constructor($injector: any, $scope: any);
        setInjections($injector: any): void;
        initComp(): void;
    }
}
declare module spinnerBlock.Services {
    interface ISpinnerBlockSrv {
        show: boolean;
    }
    class SpinnerBlockSrv implements ISpinnerBlockSrv {
        private _show;
        show: boolean;
    }
}
