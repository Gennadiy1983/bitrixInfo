/*
* Код помещается в консоль браузера для отладки кастомных JS событий битрикс.
*/

BX.onCustomEvent = function(eventObject, eventName, arEventParams, secureParams) {
    var result = {
        'eventObject': eventObject,
        'eventName': eventName,
        'arEventParams': arEventParams,
        'secureParams': secureParams
    };

    console.log(result);
};

/**
* Событие обновление грида
*/
BX.addCustomEvent(window, 'BX.Main.grid:paramsUpdated', function(){
        var extension = new BX.Intervolga.Galvent.LeadFormExt();
        extension.setHandlers();
    });
