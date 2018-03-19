const request = require('request');
const fs = require('fs');



var savePage = (url, filename, callback) => {
  request.get(url, (err, response, html) => {
    if (err) {
      console.log(err.message);
      return;
    }
    fs.writeFile(filename, html, (err) => {
      if (err) {
        console.log(err.message);
        return;
      }
    });
  });
  callback(); 
}
module.exports = savePage;