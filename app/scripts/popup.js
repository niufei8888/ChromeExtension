'use strict';

// ! Always to remember to wait page being loaded
// ! applySettingPopup is passing the function, while applySettingPopup() is passing the returned value
// apply the setting for the popup when being loaded
$(document).ready(applySettingPopup);

console.log('\'Allo \'Allo! Popup');

$(document).ready(function(){
    // define the on click event for the enable/disable switcher
    $("#switcher").click(function( event ) {
        // prevent the default event of the switcher
        event.preventDefault();

        // modify the setting in background page
        var bg = chrome.extension.getBackgroundPage();
        var settings = bg.settings;
        settings.enabled = !settings.enabled;

        // modify the popup based on the global setting
        applySettingPopup();

        // send message to the content for all the tabs
        chrome.tabs.query({active: true}, function (tabs) {
            for (var i = 0; i < tabs.length; ++i) {
                console.log("sending message to tab " + i);
                chrome.tabs.sendMessage(tabs[i].id, {enabled: settings.enabled, bodyColor: settings.bodyColor}, function(response) {
                    console.log(response);
                });
            }
        });
    });
});

// functions
function applySettingPopup(){
    var switcher = $("#switcher");

    // get the setting var through google extension message passing
    var bg = chrome.extension.getBackgroundPage();
    var settings = bg.settings;

    if (settings.enabled) {
        switcher.find('span.glyphicon-eye-close').hide();
        switcher.find('span.glyphicon-eye-open').show();
    } else {
        switcher.find('span.glyphicon-eye-close').show();
        switcher.find('span.glyphicon-eye-open').hide();
    }
}
