/**
 * Created by kevin on 10/27/14.
 */
define(function(require) {
    var Q = require('q');

    function BaseAjaxService (di) {
        this.di = di;
    }

    BaseAjaxService.prototype.rest = function(method, path, data, options) {
        var ajaxCall = this._ajax(method, path, data, options);
        return this.di.Q.promise(function(resolve) {
            function resolveJqXHR(jqXHR) {
                delete jqXHR.then;
                resolve(jqXHR);
            }
            ajaxCall.then(function(data, textStatus, jqXHR) {
                resolveJqXHR(jqXHR);
            }, resolveJqXHR);
        });
    };

    BaseAjaxService.prototype.ok = function(method, path, data, options) {
        return this.di.Q(this._ajax(method, path, data, options))
            .catch(this._rethrowAjaxError.bind(this));
    };

    BaseAjaxService.prototype._ajax = function(method, path, data, options) {
        var params = this._prepareParams(method, path, data, options);
        return this.di.$.ajax(params);
    };

    BaseAjaxService.prototype._prepareParams = function(method, path, data, options) {
        var params = options || {};
        options = options || {};
        params.dataType = options.dataType || "json";
        params.contentType = options.contentType || "application/json";
        params.url = path;
        params.type = method;
        params.cache = options.cache || false;
        if (options.responseType) params.responseType = options.responseType;

        if (data) {
            params.data = (typeof data == 'string' || data instanceof String) ? data : JSON.stringify(data);
        }

        return params;
    };

    BaseAjaxService.prototype._rethrowAjaxError = function(jqXHR, textStatus, errorThrown) {
        throw {
            status: jqXHR.status,
            responseText: jqXHR.responseText,
            textStatus: textStatus,
            errorThrown: errorThrown
        };
    };

    BaseAjaxService.prototype.setup = function(setupData) {
        this.di.$.ajaxSetup(setupData);
    };

    BaseAjaxService.newInstance = function(di) {
        di = di || {};
        di.Q = di.Q || Q;
        di.$ = di.$ || $;
        return new BaseAjaxService(di);
    };

    return BaseAjaxService;
});
