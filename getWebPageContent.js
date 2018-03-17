var http = require('http');

http.get('http://google.com', function (res) {
    console.log(res.statusCode);
    res.setEncoding('utf8');
    var rawData = '';
    res.on('data', function (chunk) {
        rawData += chunk;
    });
    res.on('end', function () {
        console.log('rawData: ' + rawData);
    });
})