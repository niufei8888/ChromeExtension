// always remember to wait until page fully loaded!
$(document).ready(function(){

    var pageOriginSetting = {
        bodyColor: document.body.style.backgroundColor
    };

    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            // change the body color if enabled
            if (request.enabled) {
                document.body.style.backgroundColor = request.bodyColor;
            } else {
                document.body.style.backgroundColor = pageOriginSetting.bodyColor;
            }

            // ! Note that here is expecting an object, not an anonymous function
            sendResponse("I got it.");
        }
    );
});
