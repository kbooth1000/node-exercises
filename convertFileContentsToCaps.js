var fs = require('fs');
var http = require('http');

var convertedContent = function (thefile, callback) {
    console.log('thefile: ' + thefile);

    fs.readFile(thefile, 'utf8', function (err, data) {
        if (err) {
            callback('The file \'' + thefile + '\' is not found.');
        }
        if (data) {
            var dataToUpper = data.toString().toUpperCase();
            console.log('dataToUpper: ' + dataToUpper);
            callback(dataToUpper);
        }
        return;
    })
}

module.exports = convertedContent;