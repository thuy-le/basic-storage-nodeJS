define(function(require){
'use strict';
    function GeneralService (di) {
        this.di = di;
    }
    GeneralService.newInstance = function(di) {
        di = di || {};
        return new GeneralService(di);
    };

    GeneralService.prototype.selected = function(selected){
        this.data.selected = selected || 1;
    };
    return GeneralService;
});