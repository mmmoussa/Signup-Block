var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var self = require("sdk/self");
var preferences = require("sdk/simple-prefs").prefs;

/*
function onPrefChange(prefName) {
  console.log("The preference " + prefName + " value has changed!");
}
require("sdk/simple-prefs").on("AutoRun", onPrefChange);
*/

require("sdk/tabs").on("ready", runScript);

function runScript(tab) {
  var auto = require('sdk/simple-prefs').prefs['AutoRun']
  if (auto == true) {
    require("sdk/tabs").activeTab.attach({
      contentScriptFile: [self.data.url("jquery-2.1.3.min.js"), self.data.url("contentscript.js")]
    });
  };
}

var button = buttons.ActionButton({
	id: "signup-block",
	label: "Signup Block",
	icon: {
		"16": "./icon-16.png",
  	"32": "./icon-32.png",
  	"64": "./icon-64.png"
  },
	onClick: function() {
  	require("sdk/tabs").activeTab.attach({
    	contentScriptFile: [self.data.url("jquery-2.1.3.min.js"), self.data.url("contentscript.js")]
  	});
	}
});
