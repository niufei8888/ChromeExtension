// always remember to wait until page fully loaded!
$(document).ready(function(){

    // a backup of the origin page setting
    var pageOriginSetting = {
        bodyColor: document.body.style.backgroundColor
    };

    // request the setting when page loaded directly from background
    chrome.runtime.sendMessage({requestType: "getSettings"}, function(response) {
        modifyPage(response);
    });

    // logic when the enable/disable switcher gets clicked
    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            modifyPage(request);

            // ! Note that here is expecting an object, not an anonymous function
            sendResponse("I got it.");
        }
    );

    function modifyPage (settings) {
        // change the body color if enabled
        if (settings.enabled) {
            document.body.style.backgroundColor = settings.bodyColor;
        } else {
            document.body.style.backgroundColor = pageOriginSetting.bodyColor;
        }
    }
});