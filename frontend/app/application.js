define([
    'framework', 'setting/Run'
], function(ApplicationFactory, AngularRun) {

    /** AngularJS App Configuration **/
    function AngularConfig($routeProvider, $locationProvider) {
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: true
        });

        $routeProvider
            .when('/', {templateUrl: '/templates/homepage.html'})
            .otherwise({templateUrl: '/templates/404.html'});
    }

    AngularConfig.$inject = [ '$routeProvider', '$locationProvider'];

    var app = ApplicationFactory.newInstance({
        angularConfig: AngularConfig,
        angularModules: ['ngRoute', 'ngMask', 'ui.bootstrap'],
        components: [
            'ui/MainController'
        ],
        angularRun: AngularRun
    });

    return app;

});
