const form = document.querySelector('#memeForm');
const body = document.querySelector('#gameArea');
const imageLink = document.querySelector('input[name="imageLink"]');
const inputTop = document.querySelector('input[name="topText"]');
const inputBot = document.querySelector('input[name="botText"]');
const fontSize = document.querySelector('input[name="fontSize"]');

form.addEventListener('submit', function(e) {
	e.preventDefault();

	let div = document.createElement('div');
	let topText = document.createElement('div');
	let botText = document.createElement('div');
	let img = document.createElement('img');
	let close = document.createElement('span');

	img.setAttribute('src', imageLink.value);
	topText.innerText = inputTop.value;
	botText.innerText = inputBot.value;
	close.innerText = 'X';

	div.className = 'WrapperMeme';
	img.alt = 'Wrong image input';
	topText.className = 'Top';
	botText.className = 'Bot';
	close.className = 'close';

	topText.style.fontSize = `${fontSize.value}px`;
	botText.style.fontSize = `${fontSize.value}px`;

	div.appendChild(topText);
	div.appendChild(img);
	div.appendChild(botText);
	div.appendChild(close);

	body.appendChild(div);
	form.reset();
});

body.addEventListener('click', function(event) {
	if (event.target.className === 'close') {
		event.target.parentElement.remove();
	}
});

// window.onload = function() {
// 	const canvas = document.getElementById('WrapperMeme');
// 	const context = canvas.getContext('2d');
// 	const imageObj = new Image();
// 	imageObj.onload = function() {
// 		context.drawImage(imageObj, 10, 10);
// 		context.font = '20px Calibri';
// 		context.fillText(inputTop.value, 50, 200);
// 		// open the image in a new browser tab
// 		// the user can right-click and save that image
// 		const win = window.open();
// 		win.document.write("<img src='" + canvas.toDataURL() + "'/>");
// 	};
// 	imageObj.src = imageLink.value;
// };
