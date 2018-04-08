declare module OrangeFeSARQ.Constant {
}
declare module OrangeFeSARQ.Models {
    interface RelatedPublicKey {
        id: string;
        name: string;
        description: string;
    }
    interface ServiceSpecification {
        id: string;
        href: string;
    }
    interface ServiceCharacteristic {
        name: string;
        value: string;
    }
    interface ServiceRef {
        id: string;
        href: string;
    }
    interface ServiceRelationship {
        type: string;
        serviceRef: ServiceRef;
    }
    interface RelatedParty {
        id: string;
        ospIdType: string;
        role: string;
        href: string;
    }
    interface SupportingService {
        id: string;
        href: string;
    }
    interface SupportingResource {
        id: string;
        href: string;
    }
    interface Service {
        id: string;
        href: string;
        name: string;
        description: string;
        type: string;
        version: string;
        state: string;
        startDate: string;
        relatedPublicKey: RelatedPublicKey;
        serviceSpecification: ServiceSpecification;
        serviceCharacteristic: ServiceCharacteristic[];
        serviceRelationship: ServiceRelationship[];
        relatedParty: RelatedParty[];
        supportingService: SupportingService[];
        supportingResource: SupportingResource[];
    }
    interface Detail {
        code: number;
        message: string;
        description: string;
        infoURL: string;
    }
    interface Error {
        code: number;
        message: string;
        description: string;
        infoURL: string;
        details: Detail[];
    }
    interface ActivationAndConfigurationModel {
        services: Service[];
        error: Error;
    }
}
declare module OrangeFeSARQ.Models {
    interface hoot_getActualRate_request {
        contractType: string;
    }
}
/**
 * Created by jcardonv on 03/01/2017.
 */
declare module newAccount.Models {
    /**
     * Modelo que contiene la informacion necesaria para una nueva cuenta de correo
     */
    class NewMailRequest {
        docNumber: string;
        docType: string;
        fixedNumber: string;
        accountLogin: string;
        passwordAccount: string;
        accountDomain: string;
        constructor(docNumber?: string, docType?: string, fixedNumber?: string, accountLogin?: string, passwordAccount?: string, accountDomain?: string);
    }
}
declare module newAccount.Models {
    /**
     * Modelo que contiene la informacion necesaria para una nueva cuenta de correo
     */
    class PassChangeEmailRequest {
        docNumber: string;
        docType: string;
        fixedNumber: string;
        accountLogin: string;
        oldPassword: string;
        newPassword: string;
        accountDomain: string;
        constructor(docNumber?: string, docType?: string, fixedNumber?: string, accountLogin?: string, oldPassword?: string, newPassword?: string, accountDomain?: string);
    }
}
declare module OrangeFeSARQ.Models {
    interface productCatalog_getRates_request {
        contractType: string;
        tmCodeOrigen: string;
    }
}
/**
 * Created by jcardonv on 18/02/2017.
 */
declare module OrangeFeSARQ.Models {
    interface ListLabel {
        name: string;
        description: string;
        id: number;
        value: string;
    }
    interface ListOptionsLiteral {
        name: string;
        value: string;
    }
    interface ListOption {
        listOptionsLiteral: [ListOptionsLiteral];
        name: string;
        id: number;
    }
    interface BlobAddress {
        tableName: string;
        columnName: string;
        identifier: string;
        identifierColumnName: string;
    }
    interface BinaryStream {
    }
    interface WebReferences {
    }
    interface ImageFile {
        filename: string;
        foldername: string;
        webReferences: [WebReferences];
        blobAddress: BlobAddress;
        binaryStream: BinaryStream;
    }
    interface ListDeepLink {
        code: string;
        color: string;
        altText: string;
        title: string;
        url: string;
        target: string;
        imageFile_bloblink_: string;
        compId: string;
        imageFile: ImageFile;
        subtitle: string;
        name: string;
        typeLink: string;
        information: string;
        id: number;
        desc: string;
    }
    interface ListImage {
        imageFile_bloblink_: string;
        altText: string;
        compId: string;
        imageFile: ImageFile;
        name: string;
        id: number;
        title: string;
    }
    interface ListModule {
        queryMode: boolean;
        listLabel: Array<ListLabel>;
        listOption: Array<ListOption>;
        listDeepLink: Array<ListDeepLink>;
        managementMode: boolean;
        title: string;
        listImage: Array<ListImage>;
        labelAngular: string;
        emptyMessage: string;
        urlMoreInfo: string;
        id: number;
        listModule: Array<ListModule>;
        modeMoreInfo: string;
        listMoreInfo: Array<String>;
        numMax: number;
        richText: any[];
        moduleMode?: any;
        listModuleSwitch: any[];
        compId: string;
        moreInformacion?: any;
        listTable: any[];
        subtitle?: any;
        titleMoreInfo?: any;
        information?: any;
        desc?: any;
    }
    interface ListModuleSwitch {
        queryMode: boolean;
        listLabel: Array<ListLabel>;
        code: string;
        managementMode: boolean;
        title: string;
        switch: boolean;
        labelAngular: string;
        button: boolean;
        typology: any;
        textButton: string;
        listMessageValidation: any[];
        compId: string;
        name: string;
        nonConfigurableService: string;
        titleMoreInfo: string;
        information: string;
        id: number;
        desc: string;
    }
    interface Column {
        name: string;
        value: string;
    }
    interface ListTable {
        code: string;
        compId: string;
        numMax: number;
        columns: Array<Column>;
        subtitle: string;
        name: string;
        id: number;
        title: string;
        desc: string;
    }
    interface Owcs {
        queryMode: boolean;
        code: string;
        listLabel: Array<ListLabel>;
        listOption: Array<ListOption>;
        rating: number;
        colorChartAlternative: any;
        listDeepLink: Array<ListDeepLink>;
        managementMode: boolean;
        title: string;
        subtitleMoreInfo: String;
        listImage: Array<ListImage>;
        labelAngular: string;
        emptyMessage: string;
        urlMoreInfo: string;
        listMessageValidation: Array<any>;
        assetId: number;
        id: number;
        listModule: Array<ListModule>;
        accordion: boolean;
        modeMoreInfo: string;
        numMax: number;
        listMoreInfo: Array<any>;
        confidence: number;
        listPages: Array<any>;
        richText: Array<any>;
        assetType: string;
        moduleMode: any;
        listModuleSwitch: Array<ListModuleSwitch>;
        compId: string;
        colorChart: string;
        moreInformacion: string;
        listTable: Array<ListTable>;
        subtitle: string;
        name: string;
        information: string;
        titleMoreInfo: string;
        desc: string;
        parents: Array<any>;
    }
    interface OwcsHtml {
        queryMode: boolean;
        code: string;
        labels: Array<ListLabel>;
        options: Array<ListOption>;
        links: Array<ListDeepLink>;
        images: Array<ListImage>;
        modules: Array<ListModule>;
        moreInfos: Array<any>;
        messageValidations: Array<any>;
        pages: Array<any>;
        richTexts: Array<any>;
        moduleSwitchs: Array<ListModuleSwitch>;
        tables: Array<ListTable>;
        parents: Array<any>;
        title: string;
        subtitle: string;
        assetType: string;
        assetId: number;
        id: number;
        rating: number;
        colorChartAlternative: any;
        managementMode: boolean;
        subtitleMoreInfo: String;
        labelAngular: string;
        emptyMessage: string;
        urlMoreInfo: string;
        accordion: boolean;
        modeMoreInfo: string;
        numMax: number;
        confidence: number;
        moduleMode: any;
        compId: string;
        colorChart: string;
        moreInformacion: string;
        name: string;
        information: string;
        titleMoreInfo: string;
        desc: string;
    }
    interface ComponentOwcs {
        section: Owcs;
    }
    interface ComponentOwcsHtml {
        section: OwcsHtml;
    }
}
declare module OrangeFeSARQ.Models {
    interface getToken_request {
        inputString: string;
        key: string;
    }
}
/**
 * Created by jcardonv on 03/01/2017.
 */
declare module OrangeFeSARQ.Models {
    class AppliedProductUsageCharge {
        startDate: Date;
        endDate: Date;
        productUsageType: number;
        calledNumber: string;
        originatingCallingNumber: string;
        destinationCode: string;
        destinationLabel: string;
        descriptionLabel: string;
        offerTariffType: string;
        unitCode: string;
        unitLabel: string;
        unitNumber: number;
        taxIncludedAmount: number;
        taxRate: number;
        usageRatingTag: string;
        isBilled: boolean;
        constructor();
    }
    class CustomerBill {
        id: string;
        category: string;
        date: string;
        nextBillDate: string;
        amountDue: number;
        dueDate: string;
        remainingAmount: number;
        netOfTaxAmount: number;
        taxIncludedTotAmount: number;
        currencyCode: string;
        lifecycleStatus: string;
        invoiceState: string;
        invoiceDomainSpecLabel: string;
        billMedia: string;
        constructor();
    }
    class Interaction {
        id: string;
        name: string;
        description: string;
        reason: string;
        reasonDetail: string;
        direction: string;
        status: string;
        startDate: Date;
        endDate: Date;
        subjectLabel: string;
        subjectDescription: string;
        contactMediumType: string;
        resultType: string;
        resultID: string;
        constructor();
    }
    class ProductOrder {
        id: string;
        version: string;
        externalID: string;
        description: string;
        creationDate: Date;
        depositDate: Date;
        isConfigurationChecked: boolean;
        configurationCheckedDate: string;
        modificationDate: Date;
        status: string;
    }
    class CustomerProblem {
        id: string;
        description: string;
        priority: string;
        dateTroubleDetection: Date;
        dateCreation: Date;
        dateRepairEstimated: Date;
        constructor();
    }
    class ContactMedium {
        id: string;
        type: string;
        constructor();
    }
    class Individual {
        nationality: string;
        gender: string;
        birthDate: string;
        placeOfBirth: string;
        countryOfBirth: string;
        maritalStatus: string;
        salutation: string;
        firstName: string;
        lastName: string;
        birthName: string;
        formattedName: string;
        id: string;
        ospIDsource: string;
        constructor();
    }
    class Organization {
        isLegalEntity: boolean;
        type: string;
        isHeadOffice: boolean;
        activityCode: string;
        legalShapeCode: string;
        legalStatusCode: string;
        tradingName: string;
        brand: string;
        id: string;
        ospIDsource: string;
        constructor();
    }
    class CommitmentDurationChosen {
        startDateTime: Date;
        endDateTime: Date;
        constructor();
    }
    class ProdPriceCharge {
        installedTariffID: string;
        value: number;
        startDate: string;
        endDate: string;
        constructor();
    }
    class ProductCharacteristic {
        name: string;
        value: string;
        modificationDate: string;
        isInstalledPublicKey: boolean;
        constructor();
    }
    class Product {
        id: string;
        status: string;
        productCode: string;
        productLabel: string;
        productType: string;
        commitmentDurationChosen: OrangeFeSARQ.Models.CommitmentDurationChosen;
        commitmentStartDate: string;
        commitmentEndDate: string;
        isCustomerVisible: boolean;
        isBundle: boolean;
        prodPriceCharge: OrangeFeSARQ.Models.ProdPriceCharge[];
        productCharacteristic: OrangeFeSARQ.Models.ProductCharacteristic[];
        constructor();
    }
    class CustomerView {
        id: string;
        status: string;
        rank: number;
        currentBalance: number;
        previousBalance: number;
        riskLevel: string;
        appliedProductUsageCharge: OrangeFeSARQ.Models.AppliedProductUsageCharge[];
        customerBill: OrangeFeSARQ.Models.CustomerBill[];
        interaction: OrangeFeSARQ.Models.Interaction[];
        productOrder: OrangeFeSARQ.Models.ProductOrder[];
        customerProblem: OrangeFeSARQ.Models.CustomerProblem[];
        contactMedium: OrangeFeSARQ.Models.ContactMedium[];
        individual: OrangeFeSARQ.Models.Individual;
        organization: OrangeFeSARQ.Models.Organization;
        product: OrangeFeSARQ.Models.Product[];
        constructor();
        getId(): string;
    }
}
/**
 * Created by jcardonv on 03/01/2017.
 */
declare module OrangeFeSARQ.Models {
    class DetailsResponse {
        private _code;
        private _message;
        private _description;
        private _infoURL;
        private _title;
        constructor(code?: number, message?: string, title?: string, description?: string, infoURL?: string);
        code: number;
        title: string;
        message: string;
        description: string;
        infoURL: string;
    }
    class ErrorResponse {
        private _code;
        private _message;
        private _description;
        private _title;
        private _infoURL;
        private _details;
        code: number;
        title: string;
        message: string;
        description: string;
        infoURL: string;
        details: Array<OrangeFeSARQ.Models.DetailsResponse>;
    }
}
/**
 * Created by jcardonv on 03/01/2017.
 */
declare module newAccount.Models {
    /**
     * Modelo que contiene la informacion necesaria para una nueva cuenta de correo
     */
    class NewMailResponse {
        private _result;
        private _error;
        constructor(result?: string, error?: OrangeFeSARQ.Models.ErrorResponse);
        result: string;
        error: OrangeFeSARQ.Models.ErrorResponse;
    }
}
declare module newAccount.Models {
    /**
     * Modelo que contiene la informacion necesaria para una cambio de contraseña
     */
    class PassChangeResponse {
        private _result;
        private _error;
        constructor(result?: string, error?: OrangeFeSARQ.Models.ErrorResponse);
        result: string;
        error: OrangeFeSARQ.Models.ErrorResponse;
    }
}
declare module OrangeFeSARQ.Services {
    class AccountSrv extends OrangeFeSARQ.Services.ParentService {
        $injector: any;
        static $inject: string[];
        private url;
        private urlMock;
        private urlRedirectEmail;
        constructor($injector: any);
        setInjections($injector: any): void;
        getData(idType: any, idNumber: any, msisdn: any, componentName?: string): ng.IPromise<any>;
        putMail(data: newAccount.Models.NewMailRequest, componentName?: string): ng.IPromise<any>;
        passChange(data: newAccount.Models.PassChangeEmailRequest, componentName?: string): ng.IPromise<newAccount.Models.PassChangeResponse>;
        checkMail(data: newAccount.Models.NewMailRequest, componentName?: string): ng.IPromise<any>;
        redirectEmail(userLogin: string, userDomain: string, userEmail: string, userOperation: string, componentName?: string): any;
        getRedirectedAccount(userLogin: string, userDomain: string, componentName?: string): any;
    }
}
declare module OrangeFeSARQ.Services {
    class ActivationAndConfigurationSrv extends OrangeFeSARQ.Services.ParentService {
        $injector: any;
        static $inject: string[];
        private urlActivationAndConfiguration;
        private brand;
        private requestModel;
        constructor($injector: any);
        setInjections($injector: any): void;
        getData(msisdn: string, queryType: string, lineCategory: string, segment?: string, componentName?: string): ng.IPromise<any>;
        changeStateService(data: OrangeFeSARQ.Models.Service, componentName?: string): ng.IPromise<any>;
    }
}
declare module OrangeFeSARQ.Services {
    /**
     * @ngdoc service
     * @name amortization.AmortizationSrv
     * @description
     * #rest
     * Servicio que busca un cliente en funcion de distintos parámetros
     */
    class AmortizationSrv extends OrangeFeSARQ.Services.ParentService {
        $injector: any;
        static $inject: string[];
        genericConstant: any;
        constructor($injector: any);
        setInjections($injector: any): void;
        /**
         * @ngdoc method
         * @name #getVap
         * @methodOf amortization.AmortizationSrv
         * @returns {object} Devuelve una promesa con el response
         */
        getVap(msisdn: string, id: string, componentName?: string): any;
    }
}
declare module OrangeFeSARQ.Services {
    class BucketBalanceSrv extends OrangeFeSARQ.Services.ParentService {
        $injector: any;
        static $inject: string[];
        bucketBalanceAPIUrl: string;
        searchUrl: string;
        genericConstant: any;
        constructor($injector: any);
        setInjections($injector: any): void;
        getBalanceByMsisdn(msisdn: string, param: string, componentName?: string): any;
        getBalanceByDoc(nif: string, param: string, componentName?: string): any;
        getCreditBucketBalanceTransactions(msisdn: string, startDate: Date, endDate: Date, componentName?: string): any;
    }
}
declare module OrangeFeSARQ.Services {
    class ContactFormSrv extends OrangeFeSARQ.Services.ParentService {
        $injector: any;
        static $inject: string[];
        genericConstant: any;
        /**
         * @ngdoc method
         * @name OrangeFeSARQ.Services:ContactFormSrv
         * @methodOf OrangeFeSARQ.Services:ContactFormSrv
         * @param {Object} $injector componente que necesita el parent injector
         * @description
         * Incluye las dependencias necesarias
         * @return {ng.IPromise<any>} ng.IPromise<any>
         */
        constructor($injector: any);
        /**
         * @ngdoc method
         * @name OrangeFeSARQ.Services:ContactFormSrv#getAddress
         * @methodOf OrangeFeSARQ.Services:ContactFormSrv
         * @param {string} comp contactForm
         * @description
         * Recoge los datos de la API Address
         * @return {ng.IPromise<any>} ng.IPromise<any>
         */
        getAddress(comp: string): ng.IPromise<any>;
        /**
         * @ngdoc method
         * @name OrangeFeSARQ.Services:ContactFormSrv#updateForm
         * @methodOf OrangeFeSARQ.Services:ContactFormSrv
         * @param {string} data Informacion a actualizar
         * @param {string} comp contactForm
         * @description
         * Modifica los datos personales de un cliente.
         * @return {ng.IPromise<any>} ng.IPromise<any>
         */
        updateForm(data: Object, id: string, comp: string): ng.IPromise<any>;
        /**
         * @ngdoc method
         * @name OrangeFeSARQ.Services:ContactFormSrv#checkAddress
         * @methodOf OrangeFeSARQ.Services:ContactFormSrv
         * @param {string} comp contactForm
         * @description
         * Comprueba que la dirección modificada es correcta
         * @return {ng.IPromise<any>} ng.IPromise<any>
         */
        checkAddress(request: any, comp: string): ng.IPromise<any>;
    }
}
declare module OrangeFeSARQ.Services {
    /**
     * @ngdoc service
     * @name contract.ContractSrv
     * @description
     * #rest
     * Servicio que busca los tipos de contrato
     */
    class ContractsSrv extends OrangeFeSARQ.Services.ParentService {
        static $inject: string[];
        genericConstant: any;
        constructor($injector: any);
        setInjections($injector: any): void;
        /**
         * @ngdoc method
         * @name #getVap
         * @methodOf contract.ContractSrv
         * @returns {object} Devuelve una promesa con el response
         * Devuelve todas las líneas que sean de prepago
         */
        getPrepagoLines: (products: any) => any;
        /**
         * @ngdoc method
         * @name #getVap
         * @methodOf contract.ContractSrv
         * @returns {object} Devuelve una promesa con el response
         * Devuelve todas las líneas que sean de pospago
         */
        getPospagoLines: (products: any) => any;
        /**
         * @ngdoc method
         * @name #getVap
         * @methodOf contract.ContractSrv
         * @returns {String} Devuelve el nombre de la tarifa (Postpago, prepago...)
         * Devuelve todas el tipo de contrato que tiene la línea
         */
        getContract: (products: any, msisdn: string) => string;
    }
}
declare module OrangeFeSARQ.Services {
    class CustomerManagementSrv extends OrangeFeSARQ.Services.ParentService {
        $injector: any;
        static $inject: string[];
        private url;
        genericConstant: any;
        enterpriseDataSrv: any;
        informationCenter: any;
        constructor($injector: any);
        /**
         * @ngdoc method
         * @name #postMobileInformation(body:string, id:string, brand:string, comp:string, showMessage?: boolean)
         * @methodOf locator.UserSrv
         * @param {object} body cuerpo de la informacion del post.
         * @param {string} id Identificador.
         * @param {string} brand Orange o Amena.
         * @param {string} comp Nombre del componente que llama al servicio.
         * @param {boolean} showMessage (opcional) Mostrar o no los mensajes de información.
         * @returns {object} Devuelve una promesa con el response
         */
        postMobileInformation(body: any, id: any, brand: any, comp: any, showMessage?: boolean): ng.IPromise<any>;
    }
}
declare module OrangeFeSARQ.Services {
    /**
     * @ngdoc service
     * @name detailRate.DetailRateSrv
     * @description
     * Servicio que realiza la llamada al microwebservice para obtener la indetailRateacion
     * de los listados de llamada/sms/data de una linea
     */
    class DetailRateSrv extends OrangeFeSARQ.Services.ParentService {
        $injector: any;
        static $inject: string[];
        detailRateDataServiceUrl: string;
        constructor($injector: any);
        /**
         * @ngdoc method
         * @name #getDetailedUsageMsisdn(compomentName:string, msisdn:string, site:string, marca:string)
         * @methodOf locator.UserSrv
         * @param {string} compomentName Tipo de contrato.
         * @param {string} msisdn Identificador de linea.
         * @param {string} site Fecha de inicio del ciclo.
         * @param {string} marca Fecha de fin del ciclo.
         * @returns {object} Devuelve una promesa con el response
         */
        getPrincipalLineSrv(msisdn: any, site: any, marca: any, compomentName?: string): any;
    }
}
declare module OrangeFeSARQ.Services {
    class GetdataClientSrv extends OrangeFeSARQ.Services.ParentService {
        $injector: any;
        static $inject: string[];
        private url;
        genericConstant: any;
        CV: any;
        constructor($injector: any);
        setInjections($injector: any): void;
        getData(): ng.IPromise<void>;
    }
}
declare module OrangeFeSARQ.Services {
    class getImagesSrv extends OrangeFeSARQ.Services.ParentService {
        $injector: any;
        static $inject: string[];
        private url;
        genericConstant: any;
        constructor($injector: any);
        setInjections($injector: any): void;
        getData(): ng.IPromise<any>;
    }
}
declare module OrangeFeSARQ.Services {
    class GetMenuItemsService extends OrangeFeSARQ.Services.ParentService {
        $injector: any;
        static $inject: string[];
        private getMenuItemsUrl;
        genericConstant: any;
        constructor($injector: any);
        setInjections($injector: any): void;
        getMenuItems(): ng.IPromise<any>;
    }
    /**
     * @ngdoc service
     * @name OrangeFeSARQ.Services:menuStore
     * @module menuStore
     * @description
     * Store del misdn
     */
    class MenuStore {
        private _menu;
        private _current;
        private _tab;
        constructor();
        /**
         * @ngdoc method
         * @name OrangeFeSARQ.Services:menuStore#msidn
         * @methodOf OrangeFeSARQ.Services:menuStore
         * @description
         * getter del menu
         * @example
         * Se hace uso del servicio con herencia de ParentController
         * ```js
         *  vm.menuStore.menu()
         * ```
         * @return {any} menu
         */
        /**
         * @ngdoc method
         * @name OrangeFeSARQ.Services:menuStore#msidn
         * @param {any} misdn misdn a guardar.
         * @methodOf OrangeFeSARQ.Services:menuStore
         * @description
         * setter del menu
         * @example
         * Se hace uso del servicio con herencia de ParentController
         * ```js
         *  vm.menuStore.menu('value')
         * ```
         * @return {void} void
         */
        menu: any;
        /**
         * @ngdoc method
         * @name OrangeFeSARQ.Services:currentStore#msidn
         * @methodOf OrangeFeSARQ.Services:currentStore
         * @description
         * getter del current
         * @example
         * Se hace uso del servicio con herencia de ParentController
         * ```js
         *  vm.currentStore.current()
         * ```
         * @return {any} current
         */
        /**
         * @ngdoc method
         * @name OrangeFeSARQ.Services:currentStore#msidn
         * @param {any} misdn misdn a guardar.
         * @methodOf OrangeFeSARQ.Services:currentStore
         * @description
         * setter del current
         * @example
         * Se hace uso del servicio con herencia de ParentController
         * ```js
         *  vm.currentStore.current('value')
         * ```
         * @return {void} void
         */
        current: any;
        /**
         * @ngdoc method
         * @name OrangeFeSARQ.Services:currentStore#tab
         * @methodOf OrangeFeSARQ.Services:currentStore
         * @description
         * getter del tab
         * @example
         * Se hace uso del servicio con herencia de ParentController
         * ```js
         *  vm.currentStore.current()
         * ```
         * @return {any} current
         */
        /**
         * @ngdoc method
         * @name OrangeFeSARQ.Services:currentStore#tab
         * @param {any} misdn misdn a guardar.
         * @methodOf OrangeFeSARQ.Services:currentStore
         * @description
         * setter del tab
         * @example
         * Se hace uso del servicio con herencia de ParentController
         * ```js
         *  vm.currentStore.current('value')
         * ```
         * @return {void} void
         */
        tab: any;
    }
}
declare module OrangeFeSARQ.Services {
    class GetHeaderFooter extends OrangeFeSARQ.Services.ParentService {
        $injector: any;
        static $inject: string[];
        private url;
        constructor($injector: any);
        setInjections($injector: any): void;
        getData(): ng.IPromise<any>;
    }
}
declare module OrangeFeSARQ.Services {
    class HootSrv extends OrangeFeSARQ.Services.ParentService {
        $injector: any;
        static $inject: string[];
        private url;
        genericConstant: any;
        constructor($injector: any);
        setInjections($injector: any): void;
        getActualRate(msisdn: string, contractType: string, compName: string): ng.IPromise<any>;
    }
}
declare module OrangeFeSARQ.Services {
    /**
     * @ngdoc service
     * @name OrangeFeSARQ.Services.PopUpSpinnerSrv
     * @description
     * #rest
     *
     */
    class PopUpSpinnerSrv {
        $injector: any;
        static $inject: string[];
        genericConstant: any;
        isShowSpinner: boolean;
        constructor($injector: any);
    }
}
declare module OrangeFeSARQ.Service {
    class ProductContractedTranslateSrv extends OrangeFeSARQ.Services.ParentService {
        static $inject: string[];
        contractedServicesAPIUrl: string;
        searchUrl: string;
        genericConstant: any;
        constructor($injector: any);
        setInjections($injector: any): void;
        getServicesContracted(msisdn: string, type: string, brand: string, detail: string, componentName?: string): any;
    }
}
declare module OrangeFeSARQ.Services {
    class TokenSrv extends OrangeFeSARQ.Services.ParentService {
        $injector: any;
        static $inject: string[];
        private url;
        genericConstant: any;
        constructor($injector: any);
        setInjections($injector: any): void;
        getToken(msisdn: string, key: string, compName: string): ng.IPromise<any>;
    }
}
declare module OrangeFeSARQ.Services {
    /**
     * @ngdoc service
     * @name locator.UserSrv
     * @description
     * #rest
     * Servicio que busca un cliente en funcion de distintos parámetros
     */
    class UserSrv extends OrangeFeSARQ.Services.ParentService {
        $q: any;
        static $inject: string[];
        clientAPIUrl: string;
        genericConstant: any;
        CV: any;
        hootAPIUrl: string;
        mdgData: any;
        utils: any;
        constructor($injector: any, $q: any);
        setInjections($injector: any): void;
        /**
         * @ngdoc method
         * @name #getUser(param:string, clientId:string)
         * @methodOf locator.UserSrv
         * @returns {object} Devuelve una promesa con el response
         */
        getUser(param: string, clientId: string, componentName?: string): any;
        getMdgUser(param: string, clientId: string, componentName?: string): void;
    }
}
declare module OrangeFeSARQ.Services {
    /**
     * @ngdoc service
     * @name userManagement.UserManagement
     * @description
     * #rest
     * Servicio que actualiza la contraseña
     */
    class UserManagementSrv extends OrangeFeSARQ.Services.ParentService {
        $injector: any;
        static $inject: string[];
        genericConstant: any;
        informationCenter: any;
        _httpCacheOrange: any;
        url: string;
        constructor($injector: any);
        setInjections($injector: any): void;
        setData(data: any, comp: string): any;
        createUser(data: any, comp: string): ng.IPromise<any>;
        changeUser(data: any, comp: string): any;
    }
}
declare module OrangeFeSARQ.Services {
    /**
     * @ngdoc service
     * @name OrangeFeSARQ.Services:Utils
     * @description
     * Clase que contine diversas funciones/utilidades
     */
    class Utils {
        private $injector;
        static $inject: string[];
        constructor($injector: any);
        escapeHtml(source: string): string;
        unescapeHtml(source: string): string;
        extractJs(source: string): string[];
        formatMBRound(value: any): any;
        formatMBTrunc(value: any): any;
        extractProperties(obj: any): string;
        fillcustomerViewStore(value: any, inputDocument: any): any;
        isNie(document: string): boolean;
        isNifNie(document: string): boolean;
        isNif(document: string): boolean;
        isCif(cif: string): boolean;
        getPrepagoLines(products: any): any;
        /**
         * @ngdoc method
         * @name #getVap
         * @methodOf contract.ContractSrv
         * @returns {object} Devuelve una promesa con el response
         * Devuelve todas las líneas que sean de pospago
         */
        getPospagoLines(products: any): any;
        /**
         * @ngdoc method
         * @name #getVap
         * @methodOf contract.ContractSrv
         * @returns {String} Devuelve el nombre de la tarifa (Postpago, prepago...)
         * Devuelve todas el tipo de contrato que tiene la línea
         */
        getContract(products: any, msisdn: string): string;
        findByName(name: any, array: any, value?: string): any;
        findByInArray(array: any, value: any, campo?: string): any;
        doDigest(): void;
        getIsMsisdn(msisdn: string): boolean;
        console(type: any, mesage: any, param: any): void;
        trim(val: string): string;
        typeHref(oData: any): any;
        /**
         * Return true if paramether phone begin with +34 || 8 || 9
         */
        isFixedLine(phone: number): boolean;
        /**
         * Return true if paramether phone begin with +34 || 6 || 7
         */
        isMobileLine(phone: number): boolean;
        /**
         * Comprueba si la URL contiene una IMG
         */
        isImage(src: any): any;
        /**
         * Comprueba si un email tiene el formato correcto
         */
        checkFormatEmail(email: string): boolean;
        /**
         * devuelve el tipo producto de una linea, pasandole como parametro un array(productos del customer view y el msisdn)
         */
        getProductType(products: any, msisdn: string): any;
        fillOwcsStores(layoutMetaData: any): void;
        setDataInStore(section: any): void;
        isset(val: any): boolean;
        objectHaveAnyProperty(obj: any): boolean;
        isNumeric(number: string): boolean;
        /**
         * @ngdoc service
         * @name OrangeFeSARQ.Services:Utils
         * @param {Object} miComponentCompOwcsStote Store que va a contener la información del store
         * @methodOf OrangeFeSARQ.Services.Utils
         * @description
         * Devuelde los datos del Store en un formato más legible para usar en el html
         */
        getOWCS(miComponentCompOwcsStote: OrangeFeSARQ.Models.ComponentOwcs): OrangeFeSARQ.Models.OwcsHtml;
        getListValues(arr: Array<any>, value?: string): any;
        /**
         * @ngdoc service
         * @name OrangeFeSARQ.Services:Utils
         * @param {customerViewStore}
         * @param {menuItems}
         * @methodOf OrangeFeSARQ.Services.Utils
         * @description
         * Parsea las urls del item menun que se le pasa como parámetro,
         * sustituyendo el patrón ##nif##, por el documento del usuario logueado
         */
        parseUrlMenu(customerViewStore: any, menu: any): any;
        checkSecurityLevel(passwordMin: number, passwordMax: number, password: string, id: any): number;
        testPassCharacters(val: string): boolean;
        /**
             * @ngdoc service
             * @name services.Controllers:Services#testPassLength
             * @param {string} val:valor a testear
             * @param {string} passwordMin:valor mínimo que deberá contener la contraseña
             * @param {string} passwordMax:valor máximo que deberá contener la contraseña
             * @return {boolean} Devuelve si la contraseña tiene del mínimo al maximo de caracteres
             * @methodOf OrangeFeSARQ.Services.Utils
             * @description
             * Devuelve si la contraseña tiene del mínimo al maximo de caracteres
        **/
        testPassLength(val: string, passwordMin: number, passwordMax: number): boolean;
        /**
             * @ngdoc service
             * @name services.Controllers:Services#testPassContainMsisdn
             * @param {string} val:valor a testear
             * @param {string} msisdn: teléfono móvil
             * @param {string} minLength:valor mínimo que deberá contener la contraseña
             * @param {string} maxLength:valor máximo que deberá contener la contraseña
             * @return {boolean} Devuelve si en el contenido de la contraseña tiene trozos del msisdn
             * @methodOf OrangeFeSARQ.Services.Utils
             * @description
             * Testea si en el contenido de la contraseña que se ha introducido tiene trozos del msisdn
        **/
        testPassContainMsisdn(val: string, msisdn: number, minLength: number, maxLength: number): boolean;
        /**
             * @ngdoc service
             * @name services.Controllers:Services#getOWCSProperty
             * @param {string} val: clave para buscar en properties
             * @return {string} valor de la clave solicitada
             * @methodOf OrangeFeSARQ.Services.Utils
             * @description
             * Devuelve la propiedad de OWCS de la clave recibida
        **/
        getOWCSProperty(val: string): string;
        /**
             * @ngdoc service
             * @name services.Controllers:Services#testPassRepeatNumber
             * @param {string} val:valor a testear
             * @return {boolean} Devuelve si en la contraseña se repiten números
             * @methodOf OrangeFeSARQ.Services.Utils
             * @description
             * Devuelve si en la contraseña se repiten números
        **/
        testPassRepeatNumber(val: string): boolean;
        /**
             * @ngdoc service
             * @name services.Controllers:Services#testPassSequentialNumbers
             * @param {string} val:valor a testear
             * @param {string} minLength:valor mínimo que deberá contener la contraseña
             * @param {string} maxLength:valor máximo que deberá contener la contraseña
             * @return {boolean} Devuelve si en la contraseña hay tramos de msisdn y secuencias de numeros de mayor a menor y de menor a mayor
             * @methodOf OrangeFeSARQ.Services.Utils
             * @description
             * Devuelve si en la contraseña hay tramos de msisdn y secuencias de numeros de mayor a menor y de menor a mayor
        **/
        testPassSequentialNumbers(val: string, minLength: number, maxLength: number): boolean;
        /**
         * @ngdoc method
         * @name OrangeFeSARQ.Services:UtilsPae
         * @methodOf OrangeFeSARQ.Services
         * @description
         * funcion de validacion para formularios
         */
        validateForm(type: string, value: string): boolean;
        /**
         * @ngdoc method
         * @name services.Controllers:Services#trusHtml
         * @param {string} html texto enriquecido que se quiere interpretar como html
         * @methodOf services.Controllers:Services
         * @description
         * Mete los estilos que vengan del rich text
         */
        trusHtml(html: string): string;
        /**
         * @ngdoc service
         * @name services.Controllers:Services#owcsParamFormat
         * @param {string} value :Cadena OWCS
         * @param {string} paramOwcs :Valor parametrizable recibido por OWCS
         * @param {string} param : Valor parametrizable a remplazar por el de OWCS
         * @return {string} Devuelve si en la contraseña hay tramos de msisdn y secuencias de numeros de mayor a menor y de menor a mayor
         * @methodOf OrangeFeSARQ.Services.Utils
         * @description
         * Remplaza un valor parametrizable de un texto.
         **/
        owcsParamFormat(value: string, paramOwcs: string, param: string): string;
    }
}
declare module OrangeFeSARQ.Services {
    class VapListSrv extends OrangeFeSARQ.Services.ParentService {
        $injector: any;
        static $inject: string[];
        private url;
        genericConstant: any;
        private vapDataApiUrl;
        private brand;
        constructor($injector: any);
        setInjections($injector: any): void;
        getVapData(msisdn: string, ID: string, componentName?: string): any;
    }
}
declare module OrangeFeSARQ.Services {
    /**
     * @ngdoc service
     * @name OrangeFeSARQ.Services.VoiceMailPopUpSrv
     * @description
     * #rest
     *
     */
    class VoiceMailPopUpSrv {
        $injector: any;
        static $inject: string[];
        genericConstant: any;
        popupVars: {};
        isVisible: boolean;
        voiceMailActive: {};
        showConfiguration: boolean;
        ifBusy: string;
        ifNoResponse: string;
        ifPowerOff: string;
        directDeflection: string;
        numberDeflection: string;
        constructor($injector: any);
    }
}
declare module OrangeFeSARQ.Services {
    class AdslStatusService extends OrangeFeSARQ.Services.ParentService {
        $injector: any;
        static $inject: string[];
        adslStatusAPIUrl: string;
        genericConstant: any;
        OSP: string;
        constructor($injector: any);
        setInjections($injector: any): void;
        initComp(): void;
        getAdslStatus(idType: string, idNumber: string, fixedNumber: string): any;
    }
}
declare module OrangeFeSARQ.Services {
    class AdslStatusStore {
        $injector: any;
        constructor($injector: any);
        private adslStatusSrv;
        private $q;
        private _callingStatus;
        static $inject: string[];
        private _internetUser;
        private _state;
        private _stateDesc;
        private _phone;
        private _encapsulated;
        private _multiplexion;
        private _vpi;
        private _vci;
        private _userName;
        private _adslPassword;
        private _dhcp;
        private _ipFija;
        private _smtpServer;
        private _popServer;
        private _email;
        private _emailPassword;
        private _realm;
        private _organization;
        private _personalPage;
        private _ftpUser;
        private _ftpAcces;
        setInjections($injector: any): void;
        isBusy(): any;
        internetUser: any;
        state: any;
        stateDesc: any;
        phone: any;
        encapsulated: any;
        multiplexion: any;
        vpi: any;
        vci: any;
        userName: any;
        adslPassword: any;
        dhcp: any;
        ipFija: any;
        smtpServer: any;
        popServer: any;
        email: any;
        emailPassword: any;
        realm: any;
        organization: any;
        personalPage: any;
        ftpUser: any;
        ftpAcces: any;
        freeStore(): any;
        getAdslStatus(idType: string, idNumber: string, fixedNumber: string): any;
    }
}
declare module changeOffer.Models {
    interface changeOffer_request {
        telefono: string;
        tipoDoc: string;
        doc: string;
        codOfertaOrigen: string;
        codPromoOrigen: string;
        codOfertaDestino: string;
        codPromoDestino: string;
    }
}
declare module OrangeFeSARQ.Services {
    class ChangeOfferSrv extends OrangeFeSARQ.Services.ParentService {
        $injector: any;
        static $inject: string[];
        private url;
        genericConstant: any;
        constructor($injector: any);
        setInjections($injector: any): void;
        setOffer(msisdn: string, ospIDtype: string, ospId: string, origin: string, dest: string, compName: string): ng.IPromise<void>;
    }
}
declare module OrangeFeSARQ.Services {
    /**
     * @ngdoc service
     * @name linesList.LinesListSrv
     * @description
     * #rest
     * Servicio que busca las l�neas de un cliente ne funcion de distintos par�metros
     */
    class LinesUsageSrv extends OrangeFeSARQ.Services.ParentService {
        $injector: any;
        static $inject: string[];
        linesUsageAPIUrl: string;
        genericConstant: any;
        constructor($injector: any);
        setInjection($injector: any): void;
        initService($injector: any): void;
        getLineUsage(typeParam: string, dataUser: string, componentName?: string): any;
        getGroupedLinesUsage(typeParam: string, dataUser: string, componentName?: string): any;
    }
}
declare module OrangeFeSARQ.Services {
    class OwcsServices extends OrangeFeSARQ.Services.ParentService {
        $injector: any;
        static $inject: string[];
        genericConstant: any;
        constructor($injector: any);
        setInjections($injector: any): void;
        initComp(): void;
        getOfertaFijoEspejo(originMorgane: string, compName: any): any;
    }
}
declare module OrangeFeSARQ.Services {
    class ProductCatalogService extends OrangeFeSARQ.Services.ParentService {
        $injector: any;
        static $inject: string[];
        productCatalogAPIUrl: string;
        searchUrl: string;
        sufixProductSpecification: any;
        sufixProductOffering: any;
        genericConstant: any;
        OSP: string;
        constructor($injector: any);
        setInjections($injector: any): void;
        initComp(): void;
        getProductSpecification(): any;
        getProductOffering(): any;
        getFamilyRates(): any;
        getProductBonusSpecification(tarifa: string): any;
        getRates(msisdn: string, contractType: string, tmCodeOrigen: string, componentName: string): any;
    }
}
declare module OrangeFeSARQ.Services {
    class ProductCatalogStore {
        constructor();
        private _specification;
        private _offering;
        private _listRates;
        specification: any;
        offering: any;
        listRates: any;
        /**
         * @ngdoc method
         * @name OrangeFeSARQ.Services:ProductCatalogStore#getProduct
         * @methodOf OrangeFeSARQ.Services:ProductCatalogStore
         * @param {string} value: valor del campo a buscar
         * @param {string} key: clave donde se buscará el valor
         * @description
         * Obtiene los datos de product Offering y del product Specification en base a tmvalue
         */
        getProduct(value: string, key?: string): any;
        /**
         * @ngdoc method
         * @name OrangeFeSARQ.Services:ProductCatalogStore#getCatalogSpecificationByTmcode
         * @methodOf OrangeFeSARQ.Services:ProductCatalogStore
         * @param {string} value: valor del campo a buscar
         * @param {string} key: clave donde se buscará el valor
         * @description
         * Recoge los datos del product catalog buscado por el campo seleccioando
         */
        getCatalogSpecificationByTmcode(value: string, key?: string): any;
        /**
         * @ngdoc method
         * @name OrangeFeSARQ.Services:ProductCatalogStore#getCatalogOfferingByTmcode
         * @methodOf OrangeFeSARQ.Services:ProductCatalogStore
         * @param {string} value: valor del campo a buscar
         * @param {string} key: clave donde se buscará el valor
         * @description
         * Recoge los datos del product Offering buscado por el campo seleccioando
         */
        getCatalogOfferingByTmcode(value: string, key?: string): Array<any>;
        /**
         * @ngdoc method
         * @name OrangeFeSARQ.Services:ProductCatalogStore#getProduct
         * @methodOf OrangeFeSARQ.Services:ProductCatalogStore
         * @description
         * Cruza los productos del prodructOffering que se hayen en el productSpecification
         */
        extractContratablesProducts(pOf: any, pSp: any): any[];
        /**
         * @ngdoc method
         * @name OrangeFeSARQ.Services:ProductCatalogStore#getProduct
         * @methodOf OrangeFeSARQ.Services:ProductCatalogStore
         * @description
         * Busca un producto de en el productInventory code es
         */
        isContractacted(ospExternalCode: any, pIn: any): boolean;
        /**
         * @ngdoc method
         * @name OrangeFeSARQ.Services:ProductCatalogStore#getShowablesProductsByComponentName
         * @methodOf OrangeFeSARQ.Services:ProductCatalogStore
         * @description
         *
         */
        getShowablesProductsByComponentName(compName: string, pOf: any, pSp: any): any[];
        getShowablesAndContractablesProductsByComponentName(compName: string, pOf: any, pSp: any, pIn: any): any[];
        getShowablesAndContractedProductsByComponentName(compName: string, pOf: any, pSp: any, pIn: any): any[];
        /**
    * @ngdoc method
    * @name OrangeFeSARQ.Services:ProductCatalogStore#getProductPrice
    * @methodOf OrangeFeSARQ.Services:ProductCatalogStore
    * @param {any} element: Elemento specification u offering para buscar
    * @param {string} currency: Moneda buscada
    * @param {string} priceType: Tipo de pago
    * @return {any} Devuelve el objeto de precio el producto
    * @description
    * Recoge
    */
        getProductPrice(element: any, currency?: string, priceType?: string): any;
    }
}
declare module OrangeFeSARQ.Services {
    class ProductInventoryService extends OrangeFeSARQ.Services.ParentService {
        static $inject: string[];
        contractedServicesAPIUrl: string;
        searchUrl: string;
        private utils;
        genericConstant: any;
        constructor($injector: any);
        setInjections($injector: any): void;
        getServicesContracted(msisdn: string, componentName?: string): any;
    }
}
declare module OrangeFeSARQ.Models {
    interface ProductsIdQuery {
        idProduct: string;
        action: string;
    }
    interface changeRate_postRequest {
        msisdn: string;
        customerId: string;
        contractId: string;
        flagBlackBerry: boolean;
        spCodesAsociated: string[];
        productsIdQuery: ProductsIdQuery[];
    }
    interface setOrangetv_postRequest {
        publicKey: string;
        action: string;
        idPromo: string;
        services: string;
        segment: string;
    }
}
declare module OrangeFeSARQ.Services {
    class ProductOrderSrv extends OrangeFeSARQ.Services.ParentService {
        $injector: any;
        static $inject: string[];
        private urlProductOrder;
        private brand;
        constructor($injector: any);
        setInjections($injector: any): void;
        getData(msisdn: string, action: string, code: string, services?: string, segment?: string, componentName?: string): ng.IPromise<any>;
        activateDesactivateProduct(msisdn: string, action: string, code: string, volumen?: number, price?: number, imei?: string, componentName?: string): ng.IPromise<any>;
        changeStatetProduct(msisdn: string, productId: string, action: string, imei?: string, componentName?: string): ng.IPromise<any>;
        getSummary(msisdn: string, customerId: string, tmCodeDestino: string, tmCodeOrigen: string, tipoLinea: string, componentName: string): ng.IPromise<any>;
        changeRate(requestBody: OrangeFeSARQ.Models.changeRate_postRequest, componentName: string): ng.IPromise<any>;
        setOrangetv(requestBody: OrangeFeSARQ.Models.setOrangetv_postRequest, componentName: string): ng.IPromise<any>;
    }
}
