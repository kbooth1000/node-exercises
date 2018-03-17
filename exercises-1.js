var readline = require('readline');
var convertFileContentsToCaps = require('./convertFileContentsToCaps');
var dnsLookup = require('./dnsLookup');
var getWebPageContent = require('./getWebPageContent');


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var askForFile = function () {
    rl.question('File name? ', function (filename) {
        convertFileContentsToCaps(filename, function (contentsUpper) {
            console.log(contentsUpper);
            rl.close();
        })
    });
};

// Write a program that prompts the user for a domain name, looks up 
// the IP address for the domain, and prints it out. Example:
// Trigger an error condition by providing an invalid domain. 
// See that the error gets displayed.
var lookUpDns = function () {
    rl.question('Domain: ', function (domainname) {
        dnsLookup(domainname, function (ipAddress) {
            console.log('IP Address: ' + ipAddress);
            rl.close();
        })
    })
};


// Write a program to save a web page. 
// Prompt the user for a URL for the web page he 
// wants to save, and for the filename to save to.
var saveWebPage = function() {
    rl.question('URL: ', function(url) {
        getWebPageContent(url, function(webPageContent) {
            console.log(webPageContent);
        })
    })
}



//askForFile();
lookUpDns();



// http.get('http://google.com', function (res) {
//     console.log(res.statusCode);
//     res.setEncoding('utf8');
//     var rawData = '';
//     res.on('data', function (chunk) {
//         rawData += chunk;
//     });
//     res.on('end', function () {
//         console.log('rawData: ' + rawData);
//     });
// })