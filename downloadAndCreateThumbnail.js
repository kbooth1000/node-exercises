const fs = require('fs');
const gm = require('gm');
const request = require('request');
var downloadAndCreateThumbnail = function (url, filename, thumbnailFilename, callback) {
    const requestOptions = {
        url: url,
        encoding: null
    };
    request(requestOptions, (err, response, data) => {
        if (err) {
            console.log(err.message);
            return;
        }

        fs.writeFile(filename, data, (err) => {
            if (err) {
                return;
            }
            gm(filename)
                .resize(240, 240)
                .write(thumbnailFilename, (err) => {
                    if (err) {
                        console.log(err.message);
                        return;
                    }
                });
        });

    });
    callback();
};

module.exports = downloadAndCreateThumbnail;