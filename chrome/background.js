chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
  	chrome.tabs.executeScript(tab.id, {"file": "jquery-2.1.3.min.js"}, function () { 
    	chrome.tabs.executeScript(tab.id, {"file": "contentscript.js"});
	});
});
