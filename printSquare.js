//  #######  PRINT SQUARE ######
// Write a function printSquare which is given a size 
// and prints a square of that size using asterisks.

var makeSquare = function(squareSize) {
    var square = [];
    var squareRow = [];
    var finalSquare = '';
    for (i = 0; i < squareSize; i++) { // row
        squareRow[i] = [];
        for (j = 0; j < squareSize; j++) { // chars in row
            squareRow[i][j] = '*';
        }

        square[i] = squareRow[i].join('') + '\n';
        finalSquare += square[i];
    }
    return finalSquare;
}

module.exports = makeSquare;