let selfie = document.querySelector('#selfie');

var aboutArray = new Array();

aboutArray[0] = new Image();
aboutArray[0].src = 'img/about/me.jpg';
aboutArray[1] = new Image();
aboutArray[1].src = 'img/about/abudhabi.jpg';
aboutArray[2] = new Image();
aboutArray[2].src = 'img/about/poker.jpg';
aboutArray[3] = new Image();
aboutArray[3].src = 'img/about/married.jpeg';

function changePhoto(n) {
	selfie.src = aboutArray[n].src;
	if (n === 1) {
		selfie.style.width = `30vw`;
	} else {
		selfie.style.width = '20vw';
	}
}
