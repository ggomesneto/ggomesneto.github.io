let selfie = document.querySelector('#selfie');

var aboutArray = new Array();

aboutArray[0] = new Image();
aboutArray[0].src = 'img/about/me.jpg';
aboutArray[1] = new Image();
aboutArray[1].src = 'img/about/abudhabi.JPG';
aboutArray[2] = new Image();
aboutArray[2].src = 'img/about/poker.jpg';
aboutArray[3] = new Image();
aboutArray[3].src = 'img/about/married.jpeg';

function changePhoto(n) {
	selfie.src = aboutArray[n].src;
	if (n === 1) {
		selfie.style.width = `600px`;
	} else {
		selfie.style.width = '400px';
	}
}

let skill = document.querySelector('#skill-one');
let week = document.querySelector('#weekDisplay');

let skillBig = Array.from(document.querySelectorAll('.skill-big'));
let skillSmall = Array.from(document.querySelectorAll('.skill-small'));
let skillArray = skillBig.concat(skillSmall);

function showSkill() {
	for (i = 0; i < skillArray.length; i++) {
		if (skillArray[i].classList.contains('learned')) {
			skillArray[i].style.opacity = '1';
		} else {
			skillArray[i].style.opacity = '0.5';
		}
	}
}

showSkill();
