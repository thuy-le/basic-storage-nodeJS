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
            .when('/create-profile', {templateUrl: '/templates/pages/step/createProfile.html'})
            .when('/create-profile-copy', {templateUrl: '/templates/pages/step/createProfileCopy.html'})
            .when('/create-profile-copy-3', {templateUrl: '/templates/pages/step/createProfileCopy3.html'})
            .when('/create-profile-copy-4', {templateUrl: '/templates/pages/step/createProfileCopy4.html'})
            .when('/about', {templateUrl: '/templates/pages/about.html'})
            .when('/add-life-event', {templateUrl: '/templates/pages/step/addLifeEvent.html'})
            .when('/', {templateUrl: '/templates/homepage.html'})
            .when('/contact', {templateUrl: '/templates/pages/contact.html'})
            .when('/pets-memorial', {templateUrl: '/templates/pages/petsMemorial.html'})
            .when('/view-more-memorials', {templateUrl: '/templates/pages/viewMoreMemorials.html'})
            .when('/pets-memorial-grid', {templateUrl: '/templates/pages/petsMemorialGrid.html'})
            .when('/pets-memorials-search-filter', {templateUrl: '/templates/pages/petsMemorialsSearchFilter.html'})
            .when('/basic-profile', {templateUrl: '/templates/pages/basicProfile.html'})
            .otherwise({templateUrl: '/templates/404.html'});
    }

    AngularConfig.$inject = [ '$routeProvider', '$locationProvider'];

    var app = ApplicationFactory.newInstance({
        angularConfig: AngularConfig,
        angularModules: ['ngRoute', 'ngMask', 'ui.bootstrap'],
        components: [
            'ui/MainController',
            'ui/login/LoginController',
            'ui/profile/step3/Step3Controller'
        ],
        angularRun: AngularRun
    });

    return app;

});
