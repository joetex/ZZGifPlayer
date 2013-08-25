// The main module of the oneeyed Add-on.

// Modules needed are `require`d, similar to CommonJS modules.
// In this case, creating a Widget that opens a new tab needs both the
// `widget` and the `tabs` modules.
var Widget = require("widget").Widget;
var tabs = require('tabs');

var tag = "img";
var data = require("sdk/self").data;
var pageMod = require("sdk/page-mod");


    pageMod.PageMod({
        include: "*",
        contentScriptWhen: "start",
        
        contentScriptFile: [data.url("gif.js"), data.url("html.js")],
        
        attachTo: ["existing", "top", "frame"],
        onAttach: function(worker) {
            worker.port.emit("bookmarkGifs");
            //worker.port.on("gotElement", function(elementContent) {
            //    console.log(elementContent);
            //});
            //console.log("test");
            
        }
    });

  
