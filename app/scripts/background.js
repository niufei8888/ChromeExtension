'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

chrome.browserAction.setBadgeText({text: '\'Allo'});

console.log('\'Allo \'Allo! Event Page for Browser Action');

// the setting object
var settings = {
    version: 1,
    enabled: true,
    bodyColor: "green"
};

// handle the request from content
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.requestType == "getSettings") {
        sendResponse({enabled: settings.enabled, bodyColor: settings.bodyColor});
    }
});