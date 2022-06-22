'use strict';

const winPositions = [ 7, 56, 448, 73, 146, 292, 273, 84 ];

const board = [
  'X', 'O', ' ',
  ' ', 'X', 'O',
  'X', ' ', 'X'
];

function hasPlayerWon (player) {
  const currentPosition = board.
    map((field, index) => field === player ? 2 ** index : 0).
    reduce((code, current) => code + current, 0);

  return winPositions.
    map(winPosition => (currentPosition & winPosition) === winPosition).
    reduce((result, current) => result || current, false);
}

console.log(hasPlayerWon('X'));
