define(function(require) {

    var AuthenticationService = require('service/AuthenticationService');
    var LocalStorage = require('cmvp/services/LocalStorage');
    
    function AngularRun($location, $rootScope) {
        //
        // var authenticationService = AuthenticationService.newInstance();
        // $rootScope.$on('$routeChangeSuccess', function () {
        //     if(!authenticationService.validate()){
        //         window.location.href = '#/login';
        //     }
        // })
    }
    AngularRun.$inject = ['$location', '$rootScope'];

    return AngularRun;
});
