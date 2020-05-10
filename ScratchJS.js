(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
    
    ext.alert = function(text) {
        alert(text);
    };

    ext.confirm = function(text) {
        return confirm(text);
    };

    ext.prompt = function(text) {
        var output = prompt(text);
        if (!output) {
            return '';
        } else {
            return output;
        };
     };
       
    ext.log = function(text) {
        console.log(text);
        };
    
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            [' ','alert %s','alert'],
            ['b','confirm %s','confirm'],
            ['r','prompt %s','prompt'],
            [' ','console.log %s','log'],
        ]
 

    // Register the extension
    ScratchExtensions.register('ScratchJS', descriptor, ext);
})({});
