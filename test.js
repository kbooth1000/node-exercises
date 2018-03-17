var assert = require('assert');
var printNumbers = require('./printNumbers');
var printSquare = require('./printSquare');
var printBox = require('./printBox');
var printBanner = require('./printBanner');
var factors = require('./factors');

var numberString = printNumbers(5).toString();
var squareString = printSquare(5).toString();
var boxString = printBox(5).toString();
var bannerString = printBanner('THIS IS A BANNER').toString();
var factorString = factors(6).toString();



assert(numberString == [0, 1, 2, 3, 4].toString(), 'Nope');
assert(squareString == ['*****\n', '*****\n', '*****\n', '*****\n', '*****\n'].join('').toString(), ['*****\n', '*****\n', '*****\n', '*****\n', '*****\n'].join('').toString() + ' should be : ' + squareString);


assert(boxString == ['*****\n', '*   *\n', '*   *\n', '*   *\n', '*****\n'].join('').toString(), ['*****\n', '*   *\n', '*   *\n', '*   *\n', '*****\n'].join('').toString() +
    ' should be : ' + boxString);

assert(bannerString == ['********************\n',
        '*                  *\n', '* THIS IS A BANNER *\n', '*                  *\n', '********************\n'
    ]
    .join('').toString(), bannerString + ' should be: ' +
    ['********************\n', '*                  *\n', '* THIS IS A BANNER *\n', '*                  *\n', '********************\n']
    .join('').toString());


assert([1, 2, 3, 6].toString() == factorString, [1, 2, 3, 6].toString() + ' should be: ' + factorString);