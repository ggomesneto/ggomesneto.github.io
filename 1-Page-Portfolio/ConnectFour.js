class Game {
	constructor(p1, p2) {
		this.WIDTH = 7;
		this.HEIGHT = 6;
		this.currPlayer = p1;
		this.makeBoard();
		this.makeHtmlBoard();
		this.players = [ p1, p2 ];
	}

	makeBoard() {
		this.board = [];
		for (let y = 0; y < this.HEIGHT; y++) {
			this.board.push(Array.from({ length: this.WIDTH }));
		}
	}

	makeHtmlBoard() {
		const board = document.getElementById(`board-connect`);

		// make column tops (clickable area for adding a piece to that column)
		const top = document.createElement('tr');
		top.setAttribute('id', 'column-top');

		// handleCkick needs to be binded to the class. If not, it will search for elements inside top
		top.addEventListener('click', this.handleClick.bind(this));

		for (let x = 0; x < this.WIDTH; x++) {
			const headCell = document.createElement('td');
			headCell.setAttribute('id', x);
			top.append(headCell);
		}

		board.append(top);

		// make main part of board
		for (let y = 0; y < this.HEIGHT; y++) {
			const row = document.createElement('tr');

			for (let x = 0; x < this.WIDTH; x++) {
				const cell = document.createElement('td');
				cell.setAttribute('id', `${y}-${x}`);

				row.append(cell);
			}

			board.append(row);
		}
	}

	findSpotForCol(x) {
		for (let y = this.HEIGHT - 1; y >= 0; y--) {
			if (!this.board[y][x]) {
				return y;
			}
		}
		return null;
	}

	placeInTable(y, x) {
		const piece = document.createElement('div');
		piece.classList.add('piece');
		piece.style.backgroundColor = this.currPlayer.color;

		piece.style.top = -50 * (y + 2);

		const spot = document.getElementById(`${y}-${x}`);
		spot.append(piece);
	}

	endGame(msg) {
		setTimeout(function() {
			const board = document.querySelector(`#board-connect`);
			board.innerHTML = '';
			this.board = [];

			alert(msg);
		}, 100);
	}

	handleClick(evt) {
		// get x from ID of clicked cell
		let x = '';
		if (this.currPlayer instanceof Player) {
			x = +evt.target.id;
		} else {
			x = Math.floor(Math.random() * this.WIDTH);
		}

		// get next spot in column (if none, ignore click)
		const y = this.findSpotForCol(x);
		if (y === null) {
			return;
		}

		// place piece in board and add to HTML table
		this.board[y][x] = this.currPlayer;
		this.placeInTable(y, x);

		// check for win
		if (this.checkForWin()) {
			return this.endGame(`Player ${this.currPlayer.color} won!`);
		}

		// check for tie
		if (this.board.every((row) => row.every((cell) => cell))) {
			return this.endGame('Tie!');
		}

		// switch players
		this.currPlayer = this.currPlayer === this.players[0] ? this.players[1] : this.players[0];

		if (this.currPlayer instanceof Player) {
		} else {
			setTimeout(this.handleClick.bind(this), 500);
		}
	}

	checkForWin() {
		const _win = (cells) =>
			// Check four cells to see if they're all color of current player
			//  - cells: list of four (y, x) cells
			//  - returns true if all are legal coordinates & all match currPlayer

			//there is a need of an arrow function here, because if not, `this` would be referred to cells.
			cells.every(
				([ y, x ]) =>
					y >= 0 && y < this.HEIGHT && x >= 0 && x < this.WIDTH && this.board[y][x] === this.currPlayer
			);

		for (let y = 0; y < this.HEIGHT; y++) {
			for (let x = 0; x < this.WIDTH; x++) {
				// get "check list" of 4 cells (starting here) for each of the different
				// ways to win
				const horiz = [ [ y, x ], [ y, x + 1 ], [ y, x + 2 ], [ y, x + 3 ] ];
				const vert = [ [ y, x ], [ y + 1, x ], [ y + 2, x ], [ y + 3, x ] ];
				const diagDR = [ [ y, x ], [ y + 1, x + 1 ], [ y + 2, x + 2 ], [ y + 3, x + 3 ] ];
				const diagDL = [ [ y, x ], [ y + 1, x - 1 ], [ y + 2, x - 2 ], [ y + 3, x - 3 ] ];

				// find winner (only checking each win-possibility as needed)
				if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
					return true;
				}
			}
		}
	}
}

class Player {
	constructor(color) {
		this.color = color;
	}
}

class ComputerPlayer {
	constructor(color) {
		this.color = color;
	}
}

$(document).on('click', '#connect', function() {
	if ($('body')[0].innerHTML.includes('connectFourGame')) {
		return;
	}

	let markup = `

	<div class='text-center' id='connectFourGame'>
                    
    	<div id='topBar'>

        <span id='header'>Connect Four</span><span id='close'>x</span>
        

		</div>
		<br>	
		<br>
		<button id='restart-3' class='mb-3 btn btn-success'>Start Game</button>
		<form>
		  <label for='player1' >Player 1 Color</label>
		  <input id='player1' value='red'>
		  <br>
		  <label for='player2' >Player 2 Color</label>
		  <input id='player2' value='yellow'>
		  <br>
		  <label for='check' >Play against computer?</label>
		  <input id='check' type="checkbox">
		</form>


    	<div id='board-connect'>
		</div>
	</div
	
	
	`;

	$('body').append(markup);

	$('#connectFourGame').draggable({
		containment: 'parent',
		handle: '#topBar'
	});

	let button = document.querySelector(`#restart-3`);

	button.addEventListener('click', () => {
		console.log('click');
		const board = document.querySelector(`#board-connect`);

		let colorP1 = document.querySelector(`#player1`);
		let colorP2 = document.querySelector(`#player2`);
		let p1 = new Player(colorP1.value);
		let p2 = '';

		if ($(`#check`).prop('checked')) {
			p2 = new ComputerPlayer(colorP2.value);
		} else {
			p2 = new Player(colorP2.value);
		}

		board.innerHTML = '';
		this.board = [];
		new Game(p1, p2);
	});
});
