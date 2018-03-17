//  #######  PRINT A BANNER  ######
// Write a function printBanner which is given a size 
// and prints a box of that size using asterisks.
var makeBanner = function (message) {
    message = '  ' + message + '  ';
    bannerSize = message.length;
    var banner = [];
    var bannerRow = [];
    var finalBanner = '';
    for (i = 0; i < 5; i++) { // row
        bannerRow[i] = [];

        for (j = 0; j < bannerSize; j++) { // chars in row
            if (i == 0 || i == 4) {
                bannerRow[i][j] = '*';

            } else {
                if ((i >= 1 || i <= 3) && (j == 0 || j == bannerSize - 1)) {
                    bannerRow[i][j] = '*';
                } else if (((i == 1 || i == 3) && (j >= 1)) || ((i == 1 || i == 3) && (j <= bannerSize - 2))) {
                    bannerRow[i][j] = ' ';

                } else if ((i == 2) && (1 < j < bannerSize - 2)) {
                    bannerRow[i][j] = message[j];
                }
            }

        }
        banner[i] = bannerRow[i].join('') + '\n';
        finalBanner += banner[i];
    }
    return finalBanner;
}

module.exports = makeBanner;