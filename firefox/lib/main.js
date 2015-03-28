var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
var self = require("sdk/self");

var button = buttons.ActionButton({
  	id: "mozilla-link",
  	label: "Get past Signup",
  	icon: "./icon.png",
  	onClick: function() {
    	require("sdk/tabs").activeTab.attach({
      		contentScriptFile: self.data.url("contentscript.js")
    	});
  	}
});
