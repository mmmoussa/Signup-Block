chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
    chrome.tabs.executeScript(tab.id, {
        "file": "contentscript.js"
    }, function () { // Execute your code
        console.log("Script Executed .. "); // Notification on Completion
    });
});
/*
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	console.log("background lvl 1");
  chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
	  console.log("background lvl 2");
    console.log(response.farewell);
  });
});
*/