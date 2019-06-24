/*
0 0 0 0
0 0 > 0
0 0 0 0

initial direction >
<, >, ^, v
initially full of 0s

0 0 0 0
0 0 1 0
0 0 v 0

0 0 0 0
0 0 1 0
0 < 1 0

0 0 0 0
0 ^ 1 0
0 1 1 0

0 0 0 0
0 1 > 0
0 1 1 0

0 0 ^ 0
0 1 0 0
0 1 1 0

grid size, initial position, iterations
[3,4],[1,2],5

1. if on 0, rotate 90deg clockwise; if on 1, rotate 90deg counterclockwise
2. move 1 space forward
3. flip bit preceding space

[row, col]

*/

const _ = require('lodash');

function drawCarDirection(deg) {

  if (deg === 0) {

    return '^';

  } else if (deg === 90) {

    return '>';

  } else if (deg === 180) {

    return 'v';

  } else if (deg === 270) {

    return '<';

  }

}

function rotateCar(dir, currentOrientation) {

  if (dir === 'clockwise') {

    if (currentOrientation >= 270) {

      return 0;

    } else {

      return currentOrientation + 90;

    }

  } else {

    if (currentOrientation == 0) {

      return 270;

    } else {

      return currentOrientation - 90;

    }

  }

  return currentOrientation;

};

function moveCarForward(dir, curPos) {

  if (dir === 0) {

    return [curPos[0] - 1, curPos[1]];

  } else if (dir === 90) {

    return [curPos[0], curPos[1] + 1];

  } else if (dir === 180) {

    return [curPos[0] + 1, curPos[1]];

  } else if (dir === 270) {

    return [curPos[0], curPos[1] - 1];

  }

}


function CarMapProg(gridSize, initialPosition, numMoves) {

  this.grid = null;
  this.carPos = initialPosition;
  this.carDir = 90;

  var rowLength = gridSize[0];
  var colLength = gridSize[1];

  this.createGrid = () => {

    var row = [];
    var matrix = [];

    for (var i = 0; i < colLength; i++) {

      row.push(0);

    }

    for (i = 0; i < rowLength; i++) {

      matrix.push(_.clone(row));

    }

    this.grid = matrix;

  };

  this.moveCar = () => {

    var row = this.carPos[0];
    var col = this.carPos[1];
    var valueAtThisSpot = this.grid[row][col];
    var flipped = valueAtThisSpot === 1 ? 0 : 1;

    console.log('car is currently at [' + row + ',' + col + '], which is a ' + valueAtThisSpot);

    //STEP 1: ROTATE

    if (valueAtThisSpot === 0) {

      this.carDir = rotateCar('clockwise', this.carDir);

    } else {

      this.carDir = rotateCar('counterclockwise', this.carDir);

    }

    //STEP 2: MOVE FORWARD
    this.carPos = moveCarForward(this.carDir, this.carPos);

    //STEP 3: FLIP BIT
    this.grid[row][col] = '1';

  };

  this.drawMap = () => {

    var row = '';

    for (var i = 0; i < rowLength; i++) {

      row = '';

      for (var j = 0; j < colLength; j++) {

        if (this.carPos[0] === i && this.carPos[1] === j) {

          row += drawCarDirection(this.carDir) + ' ';

        } else {

          row += this.grid[i][j] + ' ';

        }

      }

      console.log(row);

    }

  };

  this.createGrid();

  for (var i = 0; i < numMoves; i++) {

    this.moveCar();
    this.drawMap();

  }

}

var map = new CarMapProg([3,4], [1,2], 5);