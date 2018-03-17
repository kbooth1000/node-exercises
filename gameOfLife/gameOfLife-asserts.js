var assert = require('assert');

var grid = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
];

var testForNeighbors = function (grid) {
    var gridArray = grid.map(function (item) {})
    // var newArray = grid.filter(row => row[0] === 0);
    return gridArray;
}

var cellNeighbors = function (x, y) {
    row[0][0]
};

var createCells = function (grid) {
    var length = grid.length;
    var width = grid[0].length;
    var cells = [];
    var counter = 0;
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < width; j++) {
            // if (i===1 && j===1){
            cells.push({
                neighbors: [
                grid[i+1][j],
                grid[i-1][j],
                grid[i][j-1],
                grid[i][j+1],
                grid[i+1][j+1],
                grid[i+1][j-1],
                grid[i-1][j+1],
                grid[i-1][j-1]
                ],
                x: i,
                y: j
            })
        // }
    }
    }
    console.log(cells);
};

var getCellNeighbors = function (cell) {

}

createCells(grid);


assert(Array.isArray(grid), 'grid is not an array');
assert(grid[1][0] == 1, 'It does not equal 1');
// assert.deepEqual(testForNeighbors(grid), grid, 'The arrays should be equal');
// assert( )