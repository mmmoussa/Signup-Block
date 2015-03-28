chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
    chrome.tabs.executeScript(tab.id, {
        "file": "contentscript.js"
    }, function () { // Execute your code
        console.log("Script Executed .. "); // Notification on Completion
    });
});