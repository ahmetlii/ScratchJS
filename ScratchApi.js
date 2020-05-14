  (function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    ext.getmessage = function(user) {
        fetch("https://api.scratch.mit.edu/users/(user)/messages/count").then(res => res.json()).then(json => { const messageCount = json.count; console.log(messageCount); return (messageCount)});
        };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['r','get message count from %s','getmessage'],
        ]
     };

    // Register the extension
    ScratchExtensions.register('ScratchJS - Api', descriptor, ext);
})({});
