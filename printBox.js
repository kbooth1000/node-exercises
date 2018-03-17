//  #######  PRINT BOX  ######
// Write a function printBox which is given a size 
// and prints a box of that size using asterisks.
var makeBox = function (boxSize) {
    var box = [];
    var boxRow = [];
    var finalBox = '';
    for (i = 0; i < boxSize; i++) { // row
        boxRow[i] = [];
        for (j = 0; j < boxSize; j++) { // chars in row
            if (i == 0 || i == boxSize - 1) {
                boxRow[i][j] = '*';
            } else {
                if (j == 0 || j == boxSize - 1) {
                    boxRow[i][j] = '*';
                } else {
                    boxRow[i][j] = ' ';
                }
            }
        }

        box[i] = boxRow[i].join('') + '\n';
        finalBox += box[i];
    }
    return finalBox;
}


module.exports = makeBox;