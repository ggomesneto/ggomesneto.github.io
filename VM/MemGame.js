var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'img/memGame/dog1.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'img/memGame/dog1.jpg';

imgArray[2] = new Image();
imgArray[2].src = 'img/memGame/dog2.jpg';

imgArray[3] = new Image();
imgArray[3].src = 'img/memGame/dog2.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'img/memGame/dog3.jpg';

imgArray[5] = new Image();
imgArray[5].src = 'img/memGame/dog3.jpg';

imgArray[6] = new Image();
imgArray[6].src = 'img/memGame/dog4.jpg';

imgArray[7] = new Image();
imgArray[7].src = 'img/memGame/dog4.jpg';

imgArray[8] = new Image();
imgArray[8].src = 'img/memGame/dog5.jpg';

imgArray[9] = new Image();
imgArray[9].src = 'img/memGame/dog5.jpg';

let card1 = 0;

let card2 = 0;

let count = 0;

let clicks = 0;

let area = '';

let RecScreen = '';

let CurrentClick = '';

if (localStorage.Record === undefined) {
	RecScreen.innerText = '';
} else {
	RecScreen.innerText = localStorage.Record;
}

function shuffle(array) {
	var m = array.length,
		t,
		i;

	// While there remain elements to shuffle…
	while (m) {
		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element.
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}
}

function createCards() {
	var board = document.getElementById('gameArea');

	for (let i = 0; i < imgArray.length; i++) {
		var cards = document.createElement('div');
		cards.classList.add('memCard');
		cards.id = `card${i}`;
		cards.setAttribute('sequence', i);
		cards.style.backgroundImage = 'url(img/memGame/backcard.jpg)';
		board.appendChild(cards);
	}
}

function reset() {
	shuffle(imgArray);

	let cards = document.querySelectorAll('.memCard');
	for (card of cards) {
		card.style.backgroundImage = 'url(img/memGame/backcard.jpg)';
		card.style.opacity = '1';
	}
	clicks = 0;
	CurrentClick.innerText = clicks;
	card1 = 0;
	card2 = 0;
}

function selectedCard(n) {
	if (card1 === 0) {
		var card = document.querySelector(`#card${n}`);

		card.style.backgroundImage = 'url(' + imgArray[n].src + ')';
		card1 = card;
	} else if (card2 === 0) {
		var card = document.querySelector(`#card${n}`);

		if (card === card1) {
		} else {
			card.style.backgroundImage = 'url(' + imgArray[n].src + ')';
			card2 = card;
		}
	} else {
	}

	if (card1 != 0 && card2 != 0) {
		if (card1.style.backgroundImage === card2.style.backgroundImage) {
			card1.style.opacity = '0';
			card2.style.opacity = '0';
			card1 = 0;
			card2 = 0;
			count++;

			if (count === 5) {
				if (RecScreen.innerText === '') {
					localStorage.setItem('Record', clicks);
					RecScreen.innerText = clicks;
				} else if (clicks < parseInt(localStorage.Record)) {
					localStorage.setItem('Record', clicks);

					RecScreen.innerText = clicks;
				} else {
					console.log('No new Record');
				}
				count = 0;
				setTimeout(function() {
					alert('You won!');
				}, 500);
				setTimeout(function() {
					reset();
				}, 3500);
			}
		} else {
			setTimeout(function() {
				card1.style.backgroundImage = 'url(img/memGame/backcard.jpg)';
				card2.style.backgroundImage = 'url(img/memGame/backcard.jpg)';
				card1 = 0;
				card2 = 0;
			}, 500);
		}
	}
}

function openDisplay(n) {
	let dis = document.getElementsByClassName('displayContent');

	dis[n].style.display = 'block';
}

function closeDisplay() {
	let dis = document.getElementsByClassName('displayContent');

	for (content of dis) {
		content.style.display = 'none';
	}
}

$(document).on('dblclick', '#memoryGame', function() {
	if ($('body')[0].innerHTML.includes(`controlArea`)) {
		return;
	}

	let markup = `
	

	<div class='text-center' id='memory'>
                    
    	<div id='topBar'>

        	<i class="fas fa-folder min"></i><span id='header'>MEMORY GAME</span><span id='close'>x</span>
        

		</div>
		<div class="container-fluid memoryBoard ">
			<div class="row ">
			
                <div class="col-md-auto ">
                  
                  	<div id='controlArea'>
                    	<div id='controls'>
                    		<button id="restart" class= ' btn btn-success' onclick="reset()">Restart</button>
                    		<br>
                    		<br>
                  		</div>
                	</div>

				</div>
				
                <div class="col-sm text-center">
                  <div id= 'gameArea'></div>
				</div>
				
            </div>
        </div>
      
	  
	  
	</div>
	


	`;

	$desktop.append(markup);

	area = document.getElementById('gameArea');

	area.addEventListener('click', function(e) {
		value = e.target.classList.value;

		if (value === 'memCard') {
			clicks++;
			CurrentClick.innerText = clicks;
			let selCard = e.target.getAttribute('sequence');
			selectedCard(selCard);
		}
	});

	shuffle(imgArray);
	createCards();
});
