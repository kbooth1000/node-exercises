const saveWebPage = require('./saveWebPage');

const url = 
  'https://atlanta.curbed.com/atlanta-development/2018/3/12/17105058/pittsburgh-yards-pittsburgh-annie-casey';
const filename = 'output2.html';

saveWebPage(url, filename, (err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log('It worked.');
});