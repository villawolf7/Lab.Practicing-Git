const board = document.querySelector(".board");
console.log(board);

const cells = document.querySelectorAll(".cell");
console.log(cells);

for (let i = 0; i < cells.length; i++) {
  const currentCell = cells[i];

  // i want to assign an id to the cell's dataset property
  // we want to store this iteration's iterator value of i === 0 - 8
  // so that later we can reference this id
  // and use it to add a move to that cell
  currentCell.dataset.id = i;
}

function buildInitialState() {
  const gameState = {
    players: ["x", "o"],
    board: new Array(9).fill(null),
    numMoves: 0,
  };

  return gameState;
}

// defining a global variable
// which will be the initial state
// that the helper function below returns
let state = buildInitialState();

// render
function renderState() {
  console.log(state);

  // now that we know that our state.board array
  // has a record of all the moves that have taken place
  // we can use that array to add the move
  // to the cell that matches the same spot in the iteration of the loop
  // which means, whichever index or i value we're at currently
  // and we can add the move at that position, to the actual DOM element's innerText

  // 1. set up a loop to iterate your state.board
  // 2. grab the move at that state.board position
  // 3. grab the DOM node that matches that position by its dataset.id property
  // 4. update the node's innerText to the move we got from step 2
  const cells = document.querySelectorAll(".cell");
  console.log(cells);

  // javascript interfaces with the DOM
  // by converting all HTML tag pairs into objects
  // so that we can access their properties, like dataset
  // through ordinary JS object notation
  // and we've got two ways of doing this
  // 1, we can use dot notation
  // ie, node.dataset
  // 2, we can use bracket notation with a string
  // node['dataset']

  for (let i = 0; i < cells.length; i++) {
    console.log(cells[i]);
    const cellId = cells[i].dataset.id;
    console.log(cellId);

    const move = state.board[i];
    console.log(move);
  }
}

// maybe a dozen or so helper functions for tiny pieces of the interface

// listeners
// every eventListener callback function
// receives the event that triggered it, as its parameter
function onBoardClick(event) {
  // reminder! we're defining move in a scope
  // above the if-else blocks
  // so that we can use it outside of those inner scopes
  let move;
  if (state.numMoves % 2 === 0) {
    move = "X";
  } else {
    move = "O";
  }

  // we need a way of figuring out
  // 1. which cell was clicked
  // we know the answer to #1, it's the event.target
  // 2. what that cell's position is
  // in the total game squares collection
  // which should be a number between 0-8

  // state.board[0] = 'X'
  // now, state.board is ['X', null, null, null, null, null, null, null, null]
  // and your DOM tic-tac-toe board will consist of cells that have
  // ids associated with each of these slots
  // by the way we read the array left to right where left most position is 0
  // last position is array[array.length - 1]

  // every cell in the DOM looks like this
  // <div data-id="8" class="cell"></div>
  // we're going to use that data-id attribute
  // to figure out which slot in our state.board array
  // to actually place the new move
  state.board[event.target.dataset.id] = move;

  state.numMoves++;

  console.log(state.board);
  // add your checkWin() function call here
  renderState(); // show the user the new state
}
const cell = document.getElementById("board");

/* 
  every eventListener receives two args
first, a string that tells WHEN to invoke the callback function
second, the callback function

when you hear callback, just think, a function that's passed as a VARIABLE to another function
that "owner" function, the one that got the callback passed to it, that's the one that actually "calls" it
so in the below, onBoardClick is your callback function


*/

board.addEventListener("click", onBoardClick); // etc

function checkWin(){
  // we need all the winning combos
  // there's only 8, and we can identify them
  const rows = [
    [0, 1, 2], // combo 1
    [3, 4, 5], // combo 2
    [6, 7, 8],
  ];

  const columns = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  const diagonals = [[0, 4, 8][(2, 4, 6)]];

  // loop each combo
  // and check for all Xs
  // then check for all Os
  /*  
  
// set up a for-loop to iterate the columns
// store each currentColumn
// then, complete the below logic

  const checkWhoWon = (playerMoveType) => {
   // playerMoveType is 'X' or 'O'


   // for every group of possible wins: rows, columns, diagonals
   // loop and check the currentCombo
  
   currentCombo.every((element) => {
    // we need to check the element's index
    // in our state.board
    // if every move is an X player1 wins
    // if every move is an O player2 wins    
    // if there's a win, return a boolean

    }) 

    ...outside all these checks, if nothing was true, return false
  }

  const player1Won = checkWhoWon('X')
  const player2Won = checkWhoWon('O')


  
  
  */
}