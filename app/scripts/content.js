// always remember to wait until page fully loaded!
$(document).ready(function(){
    console.log("Testing content script.");
    chrome.runtime.onMessage.addListener(
        function (request, sender, sendResponse) {
            console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
            console.log("request is: " + request.enabled);

            // change the body color
            document.body.style.backgroundColor = request.enabled;

            sendResponse(function() {
                return "get it";
            });
        }
    );
});
