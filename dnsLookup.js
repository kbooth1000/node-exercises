var http = require('http');
var dns = require('dns');

var lookupDns = function (theDomain, callback) {
    console.log('domain: ' + theDomain);
    dns.lookup(theDomain, function (err, ipAddress, family) {
        if(err){
            callback('There was an error: '+err);
            return;
        }
        callback(ipAddress);
    })
};

module.exports = lookupDns;