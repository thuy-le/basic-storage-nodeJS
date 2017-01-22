define(function(require) {

    var AjaxService = require('service/AjaxService');
    var Configuration = require('Configuration');

    function UserGateway(di) {
        this.di = di;
        this.ajaxService = di.ajaxService;
    }

    UserGateway.newInstance = function(di) {
        di = di || {};
        di.ajaxService = di.ajaxService || AjaxService.newInstance(di);
        return new UserGateway(di);
    };


    UserGateway.prototype.validateUser = function(email, password) {
        var data = {
            email: email, password: password
        };
        return this.ajaxService.ok('POST', Configuration.api.login, data);
    };
    return UserGateway;

});