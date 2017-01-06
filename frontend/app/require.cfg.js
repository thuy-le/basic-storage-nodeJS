requirejs.config({
    'baseUrl': '/app',
    'paths': {
        'lodash': '../node_modules/postal/node_modules/lodash/dist/lodash.min',
        'conduitjs': '../node_modules/postal/node_modules/conduitjs/lib/conduit.min',
        'angular-route': '../node_modules/angular-route/angular-route.min',
        'angular-file-upload': '../node_modules/angular-file-upload/dist/angular-file-upload.min',
        'angular': '../node_modules/angular/angular.min',
        'ng-mask': '../node_modules/ng-mask/dist/ngMask.min',
        'jquery': '../node_modules/jquery/dist/jquery.min',
        'postal': '../node_modules/postal/lib/postal.min',
        'q': '../node_modules/q/q',
        'framework': '../node_modules/cmvp-framework/src/ApplicationFactory',
        'cmvp': '../node_modules/cmvp-framework/src/cmvp',
        'meld': '../node_modules/meld/meld',
        'moment': '../node_modules/moment/min/moment.min',
        'angular-bootstrap': '../node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls',
        'angular-animate': '../node_modules/angular-animate/angular-animate.min',
        'bootstrapjs': '../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min'
    },

    'shim': {
        'angular': {
            exports: 'angular'
        },

        'angular-route': {
            deps: [ 'angular' ],
            exports: 'angular-route'
        },

        'ng-mask': {
            deps: ['angular']
        },

        'jquery': {
            exports: '$'
        },

        'framework': {
            deps: ['angular'],
            exports: 'ApplicationFactory'
        },

        'postal': {
            exports: 'postal'
        },

        'angular-file-upload': {
            deps: [ 'angular' ],
            exports: 'angular-file-upload'
        },

        'angular-animate': {
            deps: [ 'angular' ],
            exports: 'angular-animate'
        },

        'angular-bootstrap': {
            deps: [ 'angular', 'angular-animate' ]
        },
        'bootstrapjs':{
            deps: [ 'jquery' ],
            exports: 'bootstrapjs'
        }
    },

    'deps': ['main', 'angular', 'angular-route', 'ng-mask', 'jquery', 'q', 'postal', 'meld', 
    'framework', 'moment', 'angular-bootstrap', 'angular-animate',
        'bootstrapjs'],
    'callback': function() {
        require(['main']);
    },
    // for requirejs compilation:
    'include': [
        'lodash', 'angular-route', 'angular', 'ng-mask', 'jquery', 'postal', 'q',
        'moment', 'angular-bootstrap', 'angular-animate', 'bootstrapjs',
        'framework',
        'cmvp/services/EventBus',
        'cmvp/services/AjaxService',
        'cmvp/aspects/ViewRepaintAspect',

        'ui/MainController',
        'ui/MainModel',
        'ui/MainView',
        'ui/MainPresenter',

        'ui/login/LoginController',
        'ui/login/LoginModel',
        'ui/login/LoginView',
        'ui/login/LoginPresenter',

        'ui/profile/step3/Step2Controller',
        'ui/profile/step3/Step2Model',
        'ui/profile/step3/Step2View',
        'ui/profile/step3/Step2Presenter',

        'main'
    ]
});

