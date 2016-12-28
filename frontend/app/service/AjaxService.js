/**
 * Created by apium on 11/05/2016.
 */
define(function(require) {
    'use strict';

    var BaseAjaxService = require('service/BaseAjaxService');

    function AjaxService(di) {
        this.di = di;
    }

    AjaxService.newInstance = function(di) {
        di = di || {};
        di.baseAjaxService = di.baseAjaxService || BaseAjaxService.newInstance();        
        return new AjaxService(di);
    };

    AjaxService.prototype.ok = function(method, path, data, options) {
        options = options || {};
        if (options.email && options.password) {
            options.headers = {
                'Authorization': 'Basic ' + btoa(options.email + ':' + options.password)
            };
            delete options.email;
            delete options.password;
        }
        return this.di.baseAjaxService.ok(method, path, data, options);
    };

    AjaxService.prototype.getBlob = function(method, path, data, option) {
        var xhr = new XMLHttpRequest();
        var blob;

        xhr.open("GET", path, true);
        // Set the responseType to arraybuffer. "blob" is an option too, rendering manual Blob creation unnecessary, but the support for "blob" is not widespread enough yet
        xhr.responseType = "arraybuffer";
        xhr.addEventListener("load", function() {
            if (xhr.status === 200) {
                // Create a blob from the response
                blob = new Blob([xhr.response], {type: "application/octet-stream"});
                saveAs(blob, 'receipts.zip');
            }
        }, false);
        // Send XHR
        xhr.send();
    };

    return AjaxService;
});

