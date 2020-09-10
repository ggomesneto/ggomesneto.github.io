/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

let width = 7;
let height = 6;

let currPlayer = 1; // active player: 1 or 2
let board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
	// TODO: set "board" to empty HEIGHT x WIDTH matrix array

	for (i = 0; i < height; i++) {
		let newArr = [];
		for (j = 0; j < width; j++) {
			let newItem = null;
			newArr.push(newItem);
		}
		board.push(newArr);
	}

	//COPIED FROM SOLUTION

	//   for (let y = 0; y < HEIGHT; y++) {
	//     board.push(Array.from({ length: WIDTH }));
	//   }

	// Array.from({Length : x}) create an Array with x empty cells
}

/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
	// TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"

	let htmlBoard = document.querySelector('#board');

	// TODO: add comment for this code

	//creating the top line with an EventListener and an ID
	let top = document.createElement('tr');
	top.setAttribute('id', 'column-top');
	top.addEventListener('click', handleClick);

	// creating units inside the top line, based on width value and setting an ID
	for (let x = 0; x < width; x++) {
		let headCell = document.createElement('td');
		headCell.setAttribute('id', x);
		top.append(headCell);
	}

	//append top line to board
	htmlBoard.append(top);

	// TODO: add comment for this code

	//creating lines and appending units inside each line, based on width and height values
	for (let y = 0; y < height; y++) {
		const row = document.createElement('tr');
		for (let x = 0; x < width; x++) {
			const cell = document.createElement('td');
			//setting distinct ID based on the unit's position
			cell.setAttribute('id', `${y}-${x}`);
			row.append(cell);
		}
		htmlBoard.append(row);
	}
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
	// TODO: write the real version of this, rather than always returning 0
	//if you check true/false against null, it returns undefined. When it the cell is filled with currPlayer, the result is true

	for (i = height - 1; i >= 0; i--) {
		if (!board[i][x]) {
			return i;
		}
	}

	return null;
}

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
	// TODO: make a div and insert into correct table cell

	//get the cell

	let position = `${y}-${x}`;
	let tableCell = document.getElementById(`${position}`);

	//cretate div and put class name accordingly. Append it to tableCell

	let fillDiv = document.createElement('div');

	fillDiv.className = 'piece';
	if (currPlayer === 1) {
		fillDiv.classList.add('p1');
	} else {
		fillDiv.classList.add('p2');
	}
	tableCell.appendChild(fillDiv);

	//get the Bounding top data from the Div

	let recfillDiv = fillDiv.getBoundingClientRect().top;

	// Select #board and get Bounding top data from it. Calculate the movement needed from selected cell top board top.

	let board = document.querySelector('#board');
	let boardTop = board.getBoundingClientRect().top;
	let transform = recfillDiv - boardTop;

	//add a top style to fillDiv, so the new piece will start at the top of the board
	//add an transform for the piece to move down the same length to its desired position.

	fillDiv.style.top = `-${transform}px`;
	fillDiv.style.transform = `translateY(${transform}px)`;
}

/** endGame: announce game end */

function endGame(msg) {
	// TODO: pop up alert message
	alert(msg);
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
	// get x from ID of clicked cell
	let x = +evt.target.id;

	// get next spot in column (if none, ignore click)
	let y = findSpotForCol(x);
	if (y === null) {
		return;
	}

	// place piece in board and add to HTML table
	// TODO: add line to update in-memory board

	board[y][x] = currPlayer;

	placeInTable(y, x);

	// check for win
	if (checkForWin()) {
		return endGame(`Player ${currPlayer} won!`);
	}

	// check for tie
	// TODO: check if all cells in board are filled; if so call, call endGame

	let totalCells = width * height;

	let allCells = document.querySelectorAll('.piece').length;

	if (allCells === totalCells) {
		endGame();
	}

	// Copied from Solution - Isnt it accounting for the selection line too?
	// if (board.every(row => row.every(cell => cell))) {
	//   return endGame('Tie!');
	// }

	// switch players
	// TODO: switch currPlayer 1 <-> 2

	currPlayer === 1 ? (currPlayer = 2) : (currPlayer = 1);

	let colTop = Array.from(document.querySelectorAll('#column-top td'));

	for (td of colTop) {
		td.classList.toggle('toggleColor');
	}
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
	function _win(cells) {
		// Check four cells to see if they're all color of current player
		//  - cells: list of four (y, x) cells
		//  - returns true if all are legal coordinates & all match currPlayer

		return cells.every(([ y, x ]) => y >= 0 && y < height && x >= 0 && x < width && board[y][x] === currPlayer);
	}

	// TODO: read and understand this code. Add comments to help you.

	//Iterate through all cells and create arrays with the possible winning outcomes
	//Run each possible outcome on function _win in which the positions outside the board width and height are not considered and checked if all cells have the same player in it
	// If any of the results come back true, there is a winner.

	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			let horiz = [ [ y, x ], [ y, x + 1 ], [ y, x + 2 ], [ y, x + 3 ] ];
			let vert = [ [ y, x ], [ y + 1, x ], [ y + 2, x ], [ y + 3, x ] ];
			let diagDR = [ [ y, x ], [ y + 1, x + 1 ], [ y + 2, x + 2 ], [ y + 3, x + 3 ] ];
			let diagDL = [ [ y, x ], [ y + 1, x - 1 ], [ y + 2, x - 2 ], [ y + 3, x - 3 ] ];

			if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
				return true;
			}
		}
	}
}

makeBoard();
makeHtmlBoard();
