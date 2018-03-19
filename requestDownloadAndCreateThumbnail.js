var url = 'https://cdn.css-tricks.com/apple-touch-icon.png';
var filename = 'node-logo.png';
var thumbnailFilename = 'node-logo-small.png';
var downloadAndCreateThumbnail = require('./downloadAndCreateThumbnail');

downloadAndCreateThumbnail(url, filename, thumbnailFilename, function(err) {
    if (err) {
        console.log(err.message);
        return;
      }
      console.log('It worked.');
    }
)


