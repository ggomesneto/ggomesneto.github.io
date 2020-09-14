var aboutArray = new Array();

aboutArray[0] = new Image();
aboutArray[0].src = 'img/about/me.jpg';
aboutArray[1] = new Image();
aboutArray[1].src = 'img/about/abudhabi.JPG';
aboutArray[2] = new Image();
aboutArray[2].src = 'img/about/poker.jpg';
aboutArray[3] = new Image();
aboutArray[3].src = 'img/about/married.jpeg';

function hoverSkill(n) {
	$(`#tooltip${n}`).css('display', 'block');
}

function outhoverSkill(n) {
	$(`#tooltip${n}`).css('display', 'none');
}

let $selfie = $('#selfie');

function changePhoto(n) {
	$selfie.attr('src', aboutArray[n].src);
	if (n === 1) {
		$selfie.css('width', '600px');
	} else {
		$selfie.css('width', '400px');
	}
}

function selectpage(n) {
	var menu = document.getElementsByClassName('menuBut');

	var page1 = document.getElementById('memoryIntro');
	var page2 = document.getElementById('memeIntro');
	var page3 = document.getElementById('connectIntro');

	let total = [ page1, page2, page3 ];

	// for (i = 0; i < total.length; i++) {
	// 	total[i].style.display = 'none';
	// }

	total.forEach(function(value) {
		value.style.display = 'none';
	});

	total[n].style.display = 'block';

	for (x = 0; x < menu.length; x++) {
		menu[x].className = menu[x].className.replace(' active', '');
	}

	menu[n].className = menu[n].className += ' active';
}
