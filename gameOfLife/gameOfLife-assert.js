var assert = require('assert');

var grid = [
    [0, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
];
var gridLength = grid.length,
    gridWidth = grid[0].length;


var getNeighbors = function (gridArray, i,j) {
    var isWithinRange = function(coords) {
        return coords[0] >= 0 && coords[0] < gridLength && coords[1] >= 0 && coords[1] < gridWidth;
    }
    var unfilteredNeighbors = [];
    for(var x=0;x<gridArray.length;x++){            
        unfilteredNeighbors.push( [ gridArray[x][0], gridArray[x][1] ] );
    }
    var neighborsOnGrid = gridArray.filter(isWithinRange);
    // console.log('neighborsOnGrid: ['+i+', '+j+'] -- ', neighborsOnGrid);
    return neighborsOnGrid;
}

var isCellAlive = function(x,y){
    return grid[x][y];
}

var neighborsAlive = function(neighbors) {
    // console.log('cell neighbors: ', neighbors);
    var cellsAlive = 0;
    for(var i=0;i<neighbors.length;i++) {
        cellsAlive += isCellAlive(neighbors[i][0],neighbors[i][1]);
    }
    return cellsAlive;
    
}

var createCells = function (grid) {
    var cells = [];
    var counter = 0;
    
    for (var i = 0; i < gridLength; i++) {
        for (var j = 0; j < gridWidth; j++) {

            var neighborsArray = [
                [i + 1,j],
                [i - 1,j],
                [i,j - 1],
                [i,j + 1],
                [i + 1,j + 1],
                [i + 1,j - 1],
                [i - 1,j + 1],
                [i - 1,j - 1]
            ];

            cells.push({
                x: i,
                y: j,
                alive: isCellAlive(i,j),
                neighbors: getNeighbors(neighborsArray, i, j),
                neighborsAlive: neighborsAlive( getNeighbors(neighborsArray, i, j) ),
            })
        }
    }
    // console.log(cells);
    return cells;
};

var gridCells = createCells(grid);

var isCellGonnaBeAlive = function(cell) {
    // console.log('cell.alive and cell.neighborsAlive: ', cell.alive, cell.neighborsAlive);
 return ((cell.alive==1 && cell.neighborsAlive >=2 && cell.neighborsAlive <= 3)
 || (cell.alive === 0 && cell.neighborsAlive === 3) ) ? 1 : 0;
}

var nextGeneration = function(grid) {
    var nextGrid = grid.map(cell => isCellGonnaBeAlive(cell) );
    console.log('nextGrid: \n', nextGrid);
    
    return nextGrid;
}
nextGeneration( createCells(grid) );

assert(Array.isArray(grid), 'grid is not an array');
assert(grid[1][0] == 1, 'It does not equal 1');
// assert.deepEqual(testForNeighbors(grid), grid, 'The arrays should be equal');
assert( gridCells[4].x === 1, 'Nope');
assert( gridCells[7].alive === 0, 'cell 7 should be dead (0)')
assert( gridCells[1].neighborsAlive === 3, 'cell 1 should have 3 alive neighbors')
assert( gridCells[4].neighborsAlive === 2, 'cell 4 should have 2 alive neighbors')
assert( gridCells[5].neighborsAlive === 1, 'cell 5 should have 1 alive neighbor')

console.log('Passed all assertions.');
