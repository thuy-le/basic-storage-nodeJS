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
            .when('/login', {templateUrl: '/templates/pages/login.html'})
            .when('/blog', {templateUrl: '/templates/pages/blog.html'})
            .when('/blog-article', {templateUrl: '/templates/pages/blogArticle.html'})
            .when('/create-profile', {templateUrl: '/templates/pages/createProfile.html'})
            .when('/about', {templateUrl: '/templates/pages/about.html'})
            .when('/addLife-event', {templateUrl: '/templates/pages/addLifeEvent.html'})
            .when('/', {templateUrl: '/templates/homepage.html'})
            .when('/contact', {templateUrl: '/templates/pages/contact.html'})
            .otherwise({templateUrl: '/templates/404.html'});
    }

    AngularConfig.$inject = [ '$routeProvider', '$locationProvider'];

    var app = ApplicationFactory.newInstance({
        angularConfig: AngularConfig,
        angularModules: ['ngRoute', 'ngMask', 'ui.bootstrap'],
        components: [
            'ui/MainController',
            'ui/login/LoginController'
        ],
        angularRun: AngularRun
    });

    return app;

});
